import { Avatar, Col, Collapse, Row, Skeleton, Typography } from "antd";
import CollapsePanel from "antd/lib/collapse/CollapsePanel";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import React from "react";

import { useGetCryptoExchangeQuery } from "../services/CryptoApi";

const { Text } = Typography;

export default function Exchanges() {
  const { data, isFetching } = useGetCryptoExchangeQuery();
  if (isFetching) return <Skeleton active />;
  const exchanges = data && data.data.exchanges;
  console.log(exchanges);
  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {exchanges &&
          exchanges.map((exchange, i) => {
            return (
              <Col span={24}  key={exchange.uuid}>
                <Collapse>
                  <CollapsePanel
                   
                    showArrow={false}
                    header={
                      <Row key={exchange.uuid} className="inner-row">
                        <Col span={6}>
                          <Text>
                            <strong>{exchange.rank}.</strong>
                          </Text>
                          <Avatar
                            className="exchange-image"
                            src={exchange.iconUrl}
                          />
                          <Text>
                            <strong>{exchange.name}</strong>
                          </Text>
                        </Col>
                        <Col span={6}>${millify(exchange.btcPrice)}</Col>
                        <Col span={6}>{exchange.numberOfMarkets}</Col>
                        <Col span={6}>{millify(exchange.price)}%</Col>
                      </Row>
                    }
                  >
                    <a href={exchange.coinrankingUrl}>{HTMLReactParser(exchange.coinrankingUrl || "")}</a>
                  </CollapsePanel>
                </Collapse>
              </Col>
            );
          })}
      </Row>
    </>
  );
}
