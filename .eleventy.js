const htmlmin = require("html-minifier");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const {Liquid} = require("liquidjs");
const markdownIt = require("markdown-it");

function watchAndPass(file, config) {
    config.addWatchTarget(file);
    config.addPassthroughCopy(file);
}
module.exports = function (eleventyConfig) {
    watchAndPass("./assets/js", eleventyConfig);
    watchAndPass("./assets/dist", eleventyConfig);
    watchAndPass("./assets/img", eleventyConfig);
    watchAndPass("./api", eleventyConfig);
    watchAndPass("./i3s.ico", eleventyConfig);
    watchAndPass("./favicon-16x16.png", eleventyConfig);
    watchAndPass("./favicon-32x32.png", eleventyConfig);
    watchAndPass("./android-chrome-192x192.png", eleventyConfig);
    watchAndPass("./android-chrome-256x256.png", eleventyConfig);
    watchAndPass("./safari-pinned-tab.svg", eleventyConfig);
    watchAndPass("./apple-touch-icon.png", eleventyConfig);
 
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    
    // Reduce HTML output size
    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
        if(outputPath && outputPath.endsWith(".html") ) {
          let minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true
          });
          return minified;
        }
    
        return content;
    });

    eleventyConfig.addCollection("genomics", (collectionApi) => {
        return collectionApi.getFilteredByGlob("_analysis/genomics/*.md");
    });

    eleventyConfig.addCollection("transcriptomics", (collectionApi) => {
        return collectionApi.getFilteredByGlob("_analysis/transcriptomics/*.md");
    });
    
    // Pass custom options to liquid
    let options = {
        extname: ".liquid",
        dynamicPartials: true,
        strict_filters: true,
        root: ["_includes"]
    };

    const liquid = new Liquid(options);
    eleventyConfig.setLibrary("liquid", liquid);
 
    // Customize markdown-it settings
    let markdown = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    });

    eleventyConfig.addFilter('markdown', (value) => {
        return markdown.render(value);
    });

    eleventyConfig.setLibrary("md", markdown);

    // Speed up dev builds by not watching JS deps for changes
    eleventyConfig.setWatchJavaScriptDependencies(false);

	return {
		passthroughFileCopy: true,
        dir: {
            layouts: "_layouts"
        }
	}
}
