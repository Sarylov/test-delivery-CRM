import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { setupStore } from "./store/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={setupStore()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
