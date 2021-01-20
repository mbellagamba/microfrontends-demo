module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 0.25%, not dead",
        modules: false,
        useBuiltIns: "usage",
        corejs: {
          version: "3",
          proposals: true,
        },
      },
    ],
    "@babel/preset-react",
  ],
};
