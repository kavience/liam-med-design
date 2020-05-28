module.exports = {
  stories: ['../src/**/*.stories.[tj]sx'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    });
    config.module.rules.push({
      test: /\.less$/,
      loaders: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true,
              sourceMap: true,
            },
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.(gif|png|jpe?g|eot|woff|ttf|pdf)$/,
      loader: 'file-loader',
    });
    config.resolve.extensions.push('.ts', '.tsx', 'jsx');
    return config;
  },
};
