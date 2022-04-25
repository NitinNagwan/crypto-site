import { Avatar, Card, Col, Row, Skeleton, Typography } from "antd";

import moment from "moment";
import React from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Title, Text } = Typography;

const demoImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpucXfbE7khoq5GPqEkxp7TY-fXp8ScAVUeg&usqp=CAU"

export default function News({ simplified }) {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCatagory: "Cryptocurrency",
    count: simplified ? 6 : 15,
  });


  if (!cryptoNews) return <Skeleton active />;
  return (
    <>
      <Row gutter={[24, 24]}>
        {cryptoNews.value.map((news, i) => {
          return (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className="news-card" >
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                  <div className="news-image-container">
                    <Title className="new-title" level={4}>
                      {news.name}
                    </Title>

                    <img
                      style={{ minWidth: "150px", minHeight: "150px" }}
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

                  <p>
                    {news.description.length > 100
                      ? `${news.description.substring(0,100)}...`
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
