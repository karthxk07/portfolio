import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ThemeProvider from "~useContext/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
