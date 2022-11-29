import webpack from "webpack";
import { IBuildOptions } from "./types/config";

export const buildWebpackResolvers = (options: IBuildOptions): webpack.ResolveOptions => {
  return {
    extensions: ['.ts', '.tsx', '.js', '.tsx'],
    preferAbsolute: true,
    mainFiles: ['index'],
    alias: [],
    modules: [options.paths.src, 'node_modules'],
  }
}
