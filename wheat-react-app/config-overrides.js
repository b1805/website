const { override, addBabelPlugin, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  // Add babel plugin for optional chaining
  addBabelPlugin('@babel/plugin-proposal-optional-chaining'),

  // Add rule for handling .mjs files (this handles the syntax error)
  addWebpackModuleRule({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto',
  })
);
