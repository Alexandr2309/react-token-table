import { createRoot } from 'react-dom/client';
import App from './app';
import { ErrorBoundary, StoreProvider } from './app/providers';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <StoreProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StoreProvider>
);
