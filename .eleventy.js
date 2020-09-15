module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  return {
    passthroughFileCopy: true
  }
}

return {
    pathPrefix: "/blog_plantes/"
}

module.exports = {
    pathPrefix: "/blog_plantes/"
};
