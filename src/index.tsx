import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { assertHTMLElement } from './utils';
import App from './components/App';

const container = document.querySelector('#root');
assertHTMLElement<HTMLElement>(container);
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>,
);
