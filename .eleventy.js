module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };

  eleventyConfig.setBrowserSyncConfig({
    // Other configuration options...
    serveStatic: [
      {
        route: "/index.html",
        dir: "public/progress",
      },
    ],
  });
};
