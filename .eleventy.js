module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  return {
    passthroughFileCopy: true
    pathPrefix: "/silly-eleventy-demo/"
  }
}
