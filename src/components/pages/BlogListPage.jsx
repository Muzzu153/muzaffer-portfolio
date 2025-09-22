import React, { useState, useEffect } from 'react';
import sanityClient from '../../sanityClient';
import ArticleCard from '../ui/ArticleCard';
import Section from '../sections/Section';


const BlogListPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This is the GROQ query to fetch our posts
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      mainImage {
        asset,
        alt
      },
      // Generate a plain text excerpt from the first block of the body
      "excerpt": pt::text(body[0])
    }`;

    sanityClient.fetch(query)
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  if (isLoading) {
    return (
      <Section>
        <h1 className="text-center font-press text-4xl uppercase">Loading Posts...</h1>
      </Section>
    );
  }

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

export default BlogListPage;