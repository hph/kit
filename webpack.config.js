const _ = require('lodash');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const babel = require('./package').babel;


const config = {
  context: `${__dirname}/src`,
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080/',
      './client.js',
    ],
  },
  output: {
    path: `${__dirname}/build`,
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: `${__dirname}/src`,
        loader: 'babel',
        query: {
          presets: babel.presets,
          plugins: babel.plugins,
        },
      },
      {
        test: /\.css$/,
        loader: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]_[name]_[local]_[hash:base64:5]',
          'postcss',
        ].join('!'),
      },
      {
        test: /\.json$/,
        loaders: 'json',
      },
    ],
  },
  resolve: {
    root: `${__dirname}/src`,
    extensions: ['', '.js', '.jsx', '.css', '.json'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new CleanWebpackPlugin(['build'], { root: __dirname, verbose: false }),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      inject: 'body',
      title: 'Kit',
    }),
  ],
  postcss: () => [
    autoprefixer,
  ],
};

if (process.env.NODE_ENV === 'production') {
  const index = _.findIndex(config.module.loaders, ['test', /\.css$/]);
  config.module.loaders[index] = {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(
      'style',
      'css?minimize&modules&importLoaders=1&localIdentName=[hash:base64:5]!postcss'
    ),
  };
  config.plugins.push(new ExtractTextPlugin('[name]-[contenthash].min.css', {
    allChunks: true,
  }));
  config.plugins.push(new LodashModuleReplacementPlugin);
  config.plugins.push(new webpack.optimize.DedupePlugin());
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin(true));
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true,
    },
    comments: false,
    sourceMap: false,
  }));
  config.output.filename = '[name]-[hash].min.js';
  config.output.hash = true;
  config.entry.app = [config.entry.app[1]];
} else {
  config.devtool = 'source-map';
  config.devServer = {
    contentBase: `${__dirname}/build`,
    historyApiFallback: true,
    stats: {
      colors: true,
      timings: true,
      reasons: false,
      hash: false,
      version: false,
      chunks: false,
      chunkModules: false,
      cached: false,
      cachedAssets: false,
    },
  };
}


module.exports = config;
