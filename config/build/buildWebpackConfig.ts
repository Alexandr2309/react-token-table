import { Configuration } from 'webpack';
import { IBuildOptions } from './types/config';
import { buildWebpackPlugins } from './buildWebpackPlugins';
import { buildWebpackLoaders } from './buildWebpackLoaders';
import { buildWebpackResolvers } from './buildWebpackResolvers';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options: IBuildOptions): Configuration => {
  const { paths, isDev, mode } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/',
    },
    plugins: buildWebpackPlugins(options),
    module: {
      rules: buildWebpackLoaders(options),
    },
    resolve: buildWebpackResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
