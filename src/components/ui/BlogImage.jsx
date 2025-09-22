import React from 'react';
import { urlFor } from '../../sanityClient'; // We will create this helper function next

const BlogImage = ({ value }) => {
  // 'value' is the image data object from Sanity
  if (!value?.asset?._ref) {
    return null; // Don't render anything if the image is not valid
  }

  return (
    <figure className="my-4">
      <div 
        className="
          border-4 border-dark 
          shadow-neo 
          transition-transform duration-300 
          hover:scale-[1.02] hover:rotate-[-1deg]
        "
      >
        <img
          src={urlFor(value).width(800).auto('format').url()}
          alt={value.alt || 'Blog post image'} // Use alt text from Sanity
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
      {value.caption && (
        <figcaption className="text-center font-sans text-sm mt-4 text-gray-600">
          {value.caption}
        </figcaption>
      )}
    </figure>
  );
};

export default BlogImage;