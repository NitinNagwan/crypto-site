import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/Navbar";

import Homepage from "./components/Homepage";
import CryptoCurrencies from "./components/CryptoCurrencies";
import Exchanges from "./components/Exchanges";
import News from "./components/News";


export default function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route
                path="/cryptocurency"
                element={<CryptoCurrencies />}
              ></Route>
              <Route path="/excahnges" element={<Exchanges />}></Route>
              <Route path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br></br>
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/cryptocurrencies">Home</Link>
            <Link to="/excanges">Excanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
       
      </div>
    </div>
  );
}
