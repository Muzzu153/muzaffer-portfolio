import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECTID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2025-09-23', // Use a recent API version
});

// This is the new part
const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);

export function getImageUrl(source, width = 1200, height = 630) {
  if (!source) return null
  return urlFor(source).width(width).height(height).url()
}
