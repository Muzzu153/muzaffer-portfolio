import { sanityClient, getImageUrl } from '../sanityClient'
import { blogListQuery, blogPostQuery } from '../utils/sanityQueries'

export async function fetchBlogList() {
  try {
    const posts = await sanityClient.fetch(blogListQuery)
    
    // Transform Sanity data to include image URLs
    return posts.map(post => ({
      ...post,
      slug: post.slug.current,
      imageUrl: getImageUrl(post.mainImage),
    }))
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    throw new Error('Failed to fetch blog posts')
  }
}

export const fetchBlogPost = async (slug)=> {
  try {
    console.log('fetching post for slug:', slug)
    const post = await sanityClient.fetch(blogPostQuery, {slug: slug})
    
    if (!post) {
      throw new Error(`Post not found: ${slug}`)
    }
    if(post===undefined){
      return console.log('Undefined Error occured')
    }
    console.log(post)
    return post

  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error)
    throw error
  }
}

export async function fetchAllBlogSlugs() {
  try {
    const slugs = await sanityClient.fetch(`
      *[_type == "post" && defined(slug.current)].slug.current
    `)
    return slugs
  } catch (error) {
    console.error('Error fetching blog slugs:', error)
    throw new Error('Failed to fetch blog slugs')
  }
}