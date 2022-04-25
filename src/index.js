import React from "react";

import SiteRoutes from "./SiteRoutes";
import "./App.css";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "./app/store";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container); 
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SiteRoutes />
    </Provider>
  </React.StrictMode>
);
