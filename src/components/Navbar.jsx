import React from "react";
import {Menu, Typography, Avatar} from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";
export default function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="logo-container">
          <Avatar src={icon} />
          <Typography.Title level={3} className="logo">
            <Link to="/">Cryptoverse</Link>
          </Typography.Title>
        </div>

        <Menu theme="dark" defaultSelectedKeys={['home']}>
          <Menu.Item key='home' icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key='cryptocurrency' icon={<FundOutlined />}>
            <Link to="/cryptocurrenies">Cryptocurrenies</Link>
          </Menu.Item>
          <Menu.Item key='exchanges' icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item key='news' icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </div>
 
    </>
  );
}
