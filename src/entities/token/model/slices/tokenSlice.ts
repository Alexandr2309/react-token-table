import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITokenSchema, QueryConfig, Token } from '../types/';

const initialState: ITokenSchema = {
  data: [],
  queryConfig: {
    type: undefined,
    status: undefined,
  },
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<Token[]>) => {
      state.data = action.payload;
    },
    setQueryConfig: (state, action: PayloadAction<QueryConfig>) => {
      state.queryConfig = action.payload;
    },
  },
});

export const { actions: tokenActions } = tokenSlice;
export const { reducer: tokenReducer } = tokenSlice;
