import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import App from "./App";

export default function SiteRoutes() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
