import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs"
import { createClient } from "@sanity/client";

// Configure Sanity client
const sanityClient = createClient({
  projectId: '3w13g2i1',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-09-23', // Use a recent API version
});


async function generate() {
  const sitemap = new SitemapStream({ hostname: "https://muzaffer-portfolio.netlify.app/" });

  // Add static pages
  sitemap.write({ url: "/",  });
  sitemap.write({ url: "/home", });
  sitemap.write({ url: "/blog", });

  // Fetch blog slugs from Sanity
  const posts = await sanityClient.fetch(`*[_type == "post"]{ "slug": slug.current }`);

  posts.forEach(post => {
    sitemap.write({ url: `/blog/${post.slug}`,  });
  });

  sitemap.end();

  const xml = await streamToPromise(sitemap).then(data => data.toString());
  fs.writeFileSync("./public/sitemap-main.xml", xml);

  console.log("✅ Sitemap generated with", posts.length, "blog posts");
}

generate();