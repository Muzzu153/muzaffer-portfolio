import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // 1. Import useParams
import sanityClient from '../../sanityClient'; // Our configured client

// Import all the UI components we'll need for this page
import { PortableText } from '@portabletext/react';
import slugify from '../../utils/helpers';
import RetroProgressBar from '../ui/RetroProgress';
import BlogImage from '../ui/BlogImage';
import CodeBlock from '../ui/CodeBlock';
import TableOfContents from '../ui/TableOfContents';
import Section from '../sections/Section';

const BlogPostPage = () => {
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // 2. Get the 'slug' from the URL
    const { slug } = useParams();

    // 3. Use useEffect to fetch data when the component loads or the slug changes
    useEffect(() => {
        // This is the GROQ query to fetch ONE specific post
        const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      publishedAt,
      mainImage {
        asset,
        alt
      },
      body
    }`;

        const params = { slug }; // The parameters to pass to the query

        sanityClient.fetch(query, params)
            .then((data) => {
                if (data) {
                    setPost(data);
                } else {
                    setError('Post not found');
                }
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError('Failed to fetch post');
                setIsLoading(false);
            });
    }, [slug]); // The effect re-runs if the slug changes

    // 4. Define the custom components for rendering Portable Text
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

    // 5. Handle loading and error states
    if (isLoading) {
        return <Section><h1 className="text-center font-press text-4xl uppercase">Loading Post...</h1></Section>;
    }
    if (error) {
        return <Section><h1 className="text-center font-press text-4xl uppercase">{error}</h1></Section>;
    }

    // 6. Render the final page with the fetched data
    return (
        <>
            <RetroProgressBar />
            <div className="max-w-6xl mx-auto px-5 md:py-20  my-15">

                <div className="text-left md:mb-8 lg:mb-12 max-w-3xl ">
                    <h1 className="font-press text:xl md:text-2xl lg:text-3xl">{post.title}</h1>
                    <p className="text-lg mt-4 text-gray-600">{new Date(post.publishedAt).toLocaleDateString()}</p>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-15 ">
                    <div className="w-full  lg:w-3/4 md:pr-30 text-left mt-8 lg:mt-0">
                        {post.mainImage && <div className="mb-12"><BlogImage value={post.mainImage} /></div>}
                        <div id="article-content" className="prose font-sans lg:prose-xl text-xl max-w-none">
                            <PortableText value={post.body} components={components} />
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="sticky top-35">
                            <TableOfContents blocks={post.body} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div> <TableOfContents className="lg:hidden" blocks={post.body} /> </div> */}
        </>
    );
};

export default BlogPostPage;