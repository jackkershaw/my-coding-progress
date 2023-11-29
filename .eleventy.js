module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    serveStatic: [
      {
        route: "/index.html",
        dir: "public/progress",
      },
    ],
  });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
