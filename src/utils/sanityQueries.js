// Query to fetch all blog posts with essential fields
export const blogListQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "author": author->name,
    mainImage,
    "categories": categories[]->title
  }
`

// Query to fetch a single blog post by slug
export const blogPostQuery = `*[_type == "post" && slug.current == $slug][0]{
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

// Query to get all blog post slugs (useful for SSG route generation)
export const blogPostSlugsQuery = `
  *[_type == "post" && defined(slug.current)].slug.current
`