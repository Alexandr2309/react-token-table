import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

interface IStoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: IStoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
