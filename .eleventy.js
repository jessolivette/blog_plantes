module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css')
  return {
    passthroughFileCopy: true
  }
}

return {
  pathPrefix: "/silly-eleventy-demo/"
}
