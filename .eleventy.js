module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    serveStatic: [
      {
        route: "/",
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
