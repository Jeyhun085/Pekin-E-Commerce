import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store'
import App from './Components/App';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <BrowserRouter>
  <Provider store={store}>
    <App  />
  </Provider>
  </BrowserRouter>
  </React.StrictMode>

);


