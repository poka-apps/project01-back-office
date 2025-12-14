import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './app';

import './index.css';

const htmlElement = document.getElementById('root')!;
const reactNode = (
  <StrictMode>
    <App />
  </StrictMode>
);

createRoot(htmlElement).render(reactNode);
