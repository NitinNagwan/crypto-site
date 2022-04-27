import { Avatar, Card, Col, Row, Select, Skeleton, Typography } from "antd";

import moment from "moment";
import React, { useState } from "react";
import { useGetCryptosQuery } from "../services/CryptoApi";
import { useGetCryptoNewsQuery } from "../services/CryptoNewsApi";

const { Title, Text } = Typography;
const { Option } = Select;

const demoImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpucXfbE7khoq5GPqEkxp7TY-fXp8ScAVUeg&usqp=CAU";

export default function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState("cryptocurrency");
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCatagory: newsCategory,
    count: simplified ? 6 : 15,
  });
  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews) return <Skeleton active />;
  return (
    <>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="select a crypto"
            optionFilterProp="cildren"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data.data.coins.map((coin) => (
              <Option value={coin.name} key={coin.rank}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      <Row gutter={[24, 24]}>
        {cryptoNews.value.map((news, i) => {
          return (
            <Col xs={24} sm={12} lg={8} key={news.datePublished + i}>
              <Card hoverable className="news-card">
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                  <div className="news-image-container">
                    <Title className="new-title" level={4}>
                      {news.name}
                    </Title>

                    <div
                      className="img"
                      
                    >
                      <img
                        src={
                          news.image
                            ? news.image
                              ? news.image.thumbnail
                                ? news.image.thumbnail.contentUrl
                                : demoImage
                              : demoImage
                            : demoImage
                        }
                        alt="news"
                      />
                    </div>
                  </div>

                  <p>
                    {news.description.length > 100
                      ? `${news.description.substring(0, 100)}...`
                      : news.description}
                  </p>
                  <div className="provider-container">
                    <div>
                      <Avatar
                        src={
                          news.provider[0].image
                            ? news.provider[0].image.thumbnail.contentUrl
                            : demoImage
                        }
                        alt="news"
                      />

                      <Text className="provider-name">
                        {news.provider[0].name}
                      </Text>
                    </div>
                    <Text>
                      {moment(news.datePublished)
                        .startOf("ss")
                        .fromNow()}
                    </Text>
                  </div>
                </a>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
