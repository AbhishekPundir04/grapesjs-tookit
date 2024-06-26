import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './app/redux/store';
import { Provider } from 'react-redux';
import "./assets/style/sass/all.scss"
import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from './themes/default';
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={"....Loading"}>
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
);

reportWebVitals();
