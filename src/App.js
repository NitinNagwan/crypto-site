import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/Navbar";

import Homepage from "./components/Homepage";
import CryptoCurrencies from "./components/CryptoCurrencies";
import Exchanges from "./components/Exchanges";
import News from "./components/News";
import CryptoDetails from "./components/CryptoDetails";

export default function App() {
  return (
    <>
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
                  path="/cryptocurrencies"
                  element={<CryptoCurrencies />}
                ></Route>
                <Route
                  exact
                  path="/crypto/:coinId"
                  element={<CryptoDetails />}
                ></Route>
                <Route path="/exchanges" element={<Exchanges />}></Route>
                <Route path="/news" element={<News />}></Route>
              </Routes>
            </div>
          </Layout>
        </div>
      </div>
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
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          <Link to="/exchanges">Excanges</Link>
          <Link to="/news">News</Link>
        </Space>
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          @2022 copyrights
        </Typography.Title>
      </div>
    </>
  );
}
