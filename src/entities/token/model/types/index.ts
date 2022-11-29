import { TokenStatus, TokenType } from 'shared/const';

export type QueryConfig = {
  type?: TokenType;
  status?: TokenStatus;
};

export type Token = {
  id: number;
  name: string;
  status: TokenStatus;
  type: string;
  conditions: string;
  volume: number;
  roi: number;
  free: number;
  hedge: number;
};

export interface ITokenSchema {
  data: Token[];
  queryConfig: QueryConfig;
}
