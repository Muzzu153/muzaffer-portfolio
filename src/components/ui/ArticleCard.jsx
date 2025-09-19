import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../../sanityClient'; // Our image helper
import PhysicalButton from './PhysicalButton';

const ArticleCard = ({ post }) => {
  if (!post) return null;

  return (
    <div className="bg-white border-4 border-dark shadow-neo transition-transform duration-300 hover:scale-[1.02] hover:rotate-[-1deg]">
      {/* Main Image */}
      {post.mainImage && (
        <Link to={`/blog/${post.slug.current}`}>
          <img
            src={urlFor(post.mainImage).width(800).url()}
            alt={post.mainImage.alt}
            className="w-full h-56 object-cover"
          />
        </Link>
      )}

      {/* Card Content */}
      <div className="p-6">
        <p className="font-sans text-sm text-gray-600 mb-2">
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <Link to={`/blog/${post.slug.current}`}>
          <h2 className="font-press text-2xl uppercase mb-4 hover:text-primary transition-colors">
            {post.title}
          </h2>
        </Link>
        <p className="font-sans text-base mb-6">
          {post.excerpt}
        </p>
        <PhysicalButton href={`/blog/${post.slug.current}`} variant="primary">
          Read More
        </PhysicalButton>
      </div>
    </div>
  );
};

export default ArticleCard;