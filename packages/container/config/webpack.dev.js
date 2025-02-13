const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJSON = require('.././package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: true
    /*historyApiFallback: {
      index: 'index.html',
    },*/
  },
  plugins: [
    new ModuleFederationPlugin({
        name: 'container',
        remotes: {
            marketing: 'marketing@http://localhost:8082/remoteEntry.js',
        },
        shared: packageJSON.dependencies,
        // shared: ['react', 'react-dom'],
    })
  ],
};

module.exports = merge(commonConfig, devConfig);
