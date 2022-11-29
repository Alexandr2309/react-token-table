import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { IBuildOptions } from "./types/config";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildWebpackPlugins = (
  { paths, isDev }: IBuildOptions
): webpack.WebpackPluginInstance[] => {

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    })
  ];

  if (isDev) {
    plugins.push(new ReactRefreshPlugin());
  }

  return plugins

}
