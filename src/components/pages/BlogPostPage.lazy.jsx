import { Suspense, lazy } from 'react';
import { createLazyRoute, useParams } from '@tanstack/react-router';
import { PortableText } from '@portabletext/react';
import slugify from '../../utils/helpers.js';
import BlogImage from '../ui/BlogImage.jsx';
import CodeBlock from '../ui/CodeBlock.jsx';
import { useQuery } from '@tanstack/react-query';
import { blogKeys } from '../../utils/queryKeys.js';
import { fetchBlogPost } from '../../api/blog.js';
import { useHead } from '@unhead/react';

const TableOfContents = lazy(() => import('../ui/TableOfContents.jsx'))
const RetroProgressBar = lazy(() => import('../ui/RetroProgress.jsx'));



// Define the custom components for rendering Portable Text
const components = {
    types: {
        image: BlogImage,
        code: CodeBlock,
    },
    block: {
        h2: ({ children }) => <h2 id={slugify(children)} className="font-bold text-3xl mt-12 mb-2">{children}</h2>,
        h3: ({ children }) => <h3 id={slugify(children)} className="font-bold text-3xl mt-10 mb-4">{children}</h3>,
        h4: ({ children }) => <h3 id={slugify(children)} className="font-bold text-2xl mt-2 mb-4">{children}</h3>,
        lead: ({ children }) => <p className="text-xl leading-relaxed">{children}</p>, // Custom lead paragraph style
        small: ({ children }) => <p className="text-sm text-gray-600">{children}</p>, // Custom small text style
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-gray-600">
                {children}
            </blockquote>
        ),
    },
    hardBreak: () => <br />,
    list: {
        // for bullet points
        bullet: ({ children }) => (
            <ul className="pl-4 space-y-2 my-2 font-inter text-lg colour-black">{children}</ul>
        ),
        // for numbered lists
        number: ({ children }) => (
            <ol className="list-decimal pl-5 space-y-2">{children}</ol>
        ),
    },
    listItem: ({ children }) => (
        <li className="relative pl-6 text-lg ">
            <span className="absolute left-0 top-2.5 w-2 h-2 bg-black"></span>
            {children}
        </li>
    ),
};


const BlogPostPage = () => {
    console.log('🔍 All route params:', useParams({ strict: false }));
    // const params = useParams({ from: '/blog/$slug' });
    // console.log('📝 Params object:', params);
    // console.log('📝 Slug value:', params.slug);
    // const slug = useParams({ from: '/blog/$slug' })
    const { slug } = useParams({ from: '/blog/$slug' })

    console.log('📝 Slug from URL:', slug);
    // const params = { slug }

    const { data: post } = useQuery({
        queryKey: blogKeys.detail(slug),
        queryFn: () => fetchBlogPost(slug),
    })

    console.log(post)

    const metaTitle = post.seo?.metaTitle || post.title
    const metaDescription = post.seo?.metaDescription || post.excerpt
    const ogImage = post.mainImage

    useHead({
        title: `${metaTitle} | My Blog`,
        meta: [
            { name: 'description', content: metaDescription },
            { property: 'og:title', content: metaTitle },
            { property: 'og:description', content: metaDescription },
            { property: 'og:type', content: 'article' },
            // { property: 'og:url', content: `https://example.com/blog/${slug}` },
            { property: 'og:image', content: ogImage },
            { property: 'article:published_time', content: post.publishedAt },
            { property: 'article:author', content: post.author?.name },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: metaTitle },
            { name: 'twitter:description', content: metaDescription },
            { name: 'twitter:image', content: ogImage },
        ],
    })

    // Render the final page with the fetched data
    return (
        <>
            <Suspense>
                <RetroProgressBar />
            </Suspense>
            <article className="max-w-6xl mx-auto px-5 md:py-20  my-15">

                <header className="text-left md:mb-8 lg:mb-12 max-w-3xl ">
                    <h1 className="font-press text:xl md:text-2xl lg:text-3xl">{post.title}</h1>
                    <p className="text-lg mt-4 text-gray-600">{new Date(post.publishedAt).toLocaleDateString()}</p>
                </header>

                <div className="flex flex-col lg:flex-row lg:gap-15 ">
                    <div className="w-full  lg:w-3/4 md:pr-30 text-left mt-8 lg:mt-0">
                        {post.mainImage && <div className="mb-12"><BlogImage value={post.mainImage} /></div>}

                        <div id="article-content" className="prose font-sans lg:prose-xl text-xl max-w-none">
                            <PortableText value={post.body} components={components} />
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="sticky top-35">
                            <Suspense>
                                <TableOfContents blocks={post.body} />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </article>
            {/* <div> <TableOfContents className="lg:hidden" blocks={post.body} /> </div> */}
        </>
    );
};

export const Route = createLazyRoute('/blog/$slug')({
    component: BlogPostPage,
})

export default BlogPostPage;