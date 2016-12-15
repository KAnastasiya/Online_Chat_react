const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    chat: './index.js',
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },

  devtool: NODE_ENV === 'development' ? 'inline-source-map' : null,

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      Redux: 'redux',
      ReactDOM: 'react-dom',
      ReactRedux: 'react-redux',
      ReduxForm: 'redux-form',
      ReactCSSTransitionGroup: 'react-addons-css-transition-group',
    }),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.styl'],
  },

  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.(ttf|eot|woff|woff2)(\?.*)?$/,
      loader: 'url?limit=10000&name=fonts/[name].[ext]?[hash]',
    }, {
      test: /\.styl$/,
      loader: 'style!css!autoprefixer?browsers=last 3 version&cascade=false!stylus?sourceMap',
    }, {
      test: /\.(js|jsx)?$/,
      loader: 'babel',
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loaders: [
        'url?limit=28000&name=img/[name].[ext]?[hash]',
        'image-webpack',
      ],
    }, {
      test: /\.(mp3)(\?.*)?$/,
      loaders: [
        'file?limit=28000&name=sounds/[name].[ext]?[hash]',
      ],
    }],
  },

  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'public'),
    proxy: {
      '/message': {
        target: 'http://localhost:3000/message',
      },
      '/contacts': {
        target: 'http://localhost:3000/contacts',
      },
    },
  },

  imageWebpackLoader: {
    mozjpeg: {
      quality: 65,
      progressive: true,
    },
    pngquant: {
      quality: '65-80',
      speed: 4,
    },
    svgo: {
      plugins: [
        { removeComments: true },
        { removeMetadata: true },
        { removeUselessDefs: true },
        { removeEditorsNSData: true },
        { removeEmptyAttrs: true },
        { removeViewBox: true },
        { convertColor: true },
      ],
    },
  },
};

if (NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true,
        unused: true,
        collapse_vars: true,
      },
    })
  );
}
