import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './components/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <React.StrictMode>
        <HelmetProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary> 
        </HelmetProvider>
       </React.StrictMode>
    </BrowserRouter>
);

