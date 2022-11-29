export interface IBuildPaths {
  entry: string;
  html: string;
  build: string;
  src: string;
}

export type BuildMode = 'production' | 'development';

export interface IBuildEnv {
  mode: string;
  port: number
}


export interface IBuildOptions {
  paths: IBuildPaths;
  mode: BuildMode;
  isDev: boolean;
  port: number;
}
