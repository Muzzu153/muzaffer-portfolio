import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: '3w13g2i1',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-09-23', // Use a recent API version
});

// This is the new part
const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);

export default sanityClient;