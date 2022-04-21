import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Layout,Typography,Space} from 'antd'
import Navbar from "./components/Navbar";

export default function App() {
  return (
      <div className="App">
          <div className="navbar">
              <Navbar />

          </div>
          <div className="main">
              <h1>hello</h1>

          </div>
          <div className="footer">

          </div>

      </div>
  )
}
