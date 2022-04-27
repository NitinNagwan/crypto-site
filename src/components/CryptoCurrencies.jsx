import { Card, Col, Input, Row, Skeleton } from "antd";
import millify from "millify";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/CryptoApi";



export default function CryptoCurrencies({ simplified }) {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);

  const [cryptos, setCryptos] = useState(data && data.data.coins);
  const [searchTerm, setSearchTerm] = useState("");
  let coins = [];

  useEffect(() => {
    const filteredData = coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredData);
  }, [data, searchTerm]);

  if (isFetching || !data) return <Skeleton active />;
  else coins = data.data.coins;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos.map((coin, i) => {
          return (
            <Col
              xs={24}
              sm={12}
              lg={6}
              key={coin.name}
              className="crypto-card"
            >
              <Link to={`/crypto/${coin.uuid}`}>
                <Card
                  hoverable
                  title={`${coin.rank}. ${coin.name}`}
                  extra={
                    <img
                      className="crypto-image"
                      src={coin.iconUrl}
                      alt="icon"
                    />
                  }
                >
                  <p>Price: {millify(coin.price)}</p>
                  <p>Market Cap: {millify(coin.marketCap)}</p>
                  <p>Daily Change: {millify(coin.change)}%</p>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
