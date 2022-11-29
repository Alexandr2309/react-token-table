import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildMode, IBuildEnv, IBuildPaths } from './config/build/types/config';
import path from 'path';

export default (env: IBuildEnv) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'build'),
  };

  const mode = (env.mode as BuildMode) || 'development';
  const isDev = mode === 'development';
  const port = env.port || 3000;

  const config: Configuration = buildWebpackConfig({ paths, isDev, mode, port });

  return config;
};
