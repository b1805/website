const { override, addWebpackModuleRule, addWebpackPlugin } = require('customize-cra');
const path = require('path');
const webpack = require('webpack');

module.exports = override(
  // Handle .mjs files as ESM
  addWebpackModuleRule({
    test: /\.mjs$/,
    include: /node_modules/,
    type: 'javascript/auto', // Ensures Webpack correctly interprets .mjs files
  }),

  // Add Babel loader for relume-ui (optional chaining, nullish coalescing)
  addWebpackModuleRule({
    test: /\.(js|mjs|jsx)$/,
    include: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules/@relume_io/relume-ui')
    ],
    use: {
      loader: require.resolve('babel-loader'),
      options: {
        presets: ['@babel/preset-react'],
        plugins: [
          '@babel/plugin-proposal-optional-chaining',
          '@babel/plugin-proposal-nullish-coalescing-operator'
        ],
      },
    },
  }),

  // Force .mjs files from @relume_io/relume-ui to be treated as CommonJS
  addWebpackPlugin(
    new webpack.NormalModuleReplacementPlugin(
      /@relume_io\/relume-ui/,
      resource => {
        resource.request = resource.request.replace(/\.mjs$/, '.js'); // Treat .mjs as .js
      }
    )
  )
);
