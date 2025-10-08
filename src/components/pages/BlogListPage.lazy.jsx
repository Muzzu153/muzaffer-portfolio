import ArticleCard from '../ui/ArticleCard';
import Section from '../sections/Section';
import { createLazyRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { blogKeys } from '../../utils/queryKeys';
import { fetchBlogList } from '../../api/blog';
import { useHead } from '@unhead/react';

const BlogListPage = () => {
  const { data: posts } = useQuery({
    queryKey: blogKeys.lists(),
    queryFn: fetchBlogList,
  })

   useHead({
    title: 'Blog Posts | My Blog',
    meta: [
      { name: 'description', content: 'Read our latest blog posts about React, web development, and more' },
      { property: 'og:title', content: 'Blog Posts | My Blog' },
      { property: 'og:description', content: 'Read our latest blog posts' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://example.com/blog' },
    ],
  })

  return (
    <Section id="blog">
      <div>
        <h1 className="text-center font-press text-2xl uppercase my-8 ">The Archives</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <ArticleCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export const Route = createLazyRoute('/blog')({
  component: BlogListPage
})

export default BlogListPage;