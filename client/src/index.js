import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import store from "./redux/store.js";
import App from "./Components/App.jsx";
import { SnackbarProvider} from 'notistack';
const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CookiesProvider>
      <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
      <App />
      </SnackbarProvider>
      </Provider>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
