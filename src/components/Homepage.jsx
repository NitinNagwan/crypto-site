import React from "react";

import { Col, Row, Skeleton, Statistic, Typography } from "antd";
import { useGetNewsQuery } from "../services/cryptoApi";
import { Link } from "react-router-dom";
import CryptoCurrencies from "./CryptoCurrencies";
import News from "./News";
const { Title } = Typography;

export default function Homepage() {
  const { isFetching } = useGetNewsQuery();

  if (isFetching) return <Skeleton active></Skeleton>;

  return (
    <>
      <Title level={2} className="heading">
        {" "}
        Global Crypto States
      </Title>

      <Row>
        <Col span={12}>
          <Statistic title="Total CryptoCurrencies" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={5} />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>

      <CryptoCurrencies simplifie />

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
}
