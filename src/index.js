// import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';

import { configureStore } from './store/index';

import { Root } from './Root';

const store = configureStore();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  <Root store={store} />
  // </StrictMode>
);
