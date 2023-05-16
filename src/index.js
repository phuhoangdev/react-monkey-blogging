import React from "react";
import "./styles/index.scss";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./utils/constants";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
     <React.StrictMode>
          <ThemeProvider theme={theme}>
               <GlobalStyles></GlobalStyles>
               <BrowserRouter>
                    <App />
               </BrowserRouter>
          </ThemeProvider>
     </React.StrictMode>,
);
