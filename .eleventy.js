const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require('@11ty/eleventy-img');

async function imageShortcode(src, alt, sizes) {
  if (alt === undefined) {
    throw new Error(`Missing \`alt\` on image tag from: ${src}`);
  }
  let metadata = await Image(src, {
    widths: [300, 550, 750, "auto"],
    formats: ["avif","jpeg", "auto"],
    outputDir: "./public/img"
  });
  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };
  return Image.generateHTML(metadata, imageAttributes);
}

// Custom sorting filter for collections, uses 'order' front matter
function sortByOrder(values) {
  let vals = [...values];
  return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
}

module.exports = (eleventyConfig) => {
  // Custom responsive image shortcode
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  // Nav Plugin
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // Copy assets
  eleventyConfig.addPassthroughCopy("src/assets/**/*");
  // Copy root assets
  eleventyConfig.addPassthroughCopy({"src/assets_root/*": "/"});
  // New Collection
  eleventyConfig.addCollection("storyList", function(collection) {
    const coll = collection.getFilteredByTag("story");
  
    for(let i = 0; i < coll.length ; i++) {
      const prevStory = coll[i-1];
      const nextStory = coll[i + 1];
  
      coll[i].data["prevStory"] = prevStory;
      coll[i].data["nextStory"] = nextStory;
    }
  
    return coll;
  });
  // Register custom sorting filter
  eleventyConfig.addFilter("sortByOrder", sortByOrder);
  // Routes
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};