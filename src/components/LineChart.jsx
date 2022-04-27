import { Col, Row, Typography } from "antd";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

const { Title } = Typography;

export default function LineChart({ coinHistory, currentPrice, coinName }) {
  const coinPrice = [];
  const coinTimeStamp = [];

  for (let i = 0; i < coinHistory.data.history.length; i += 1) {
    coinPrice.push(coinHistory.data.history[i].price);

    coinTimeStamp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        type: "line",
        label: "Price to USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 0,
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-titel">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            {coinHistory && coinHistory.data.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price : $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options}></Line>
    </>
  );
}
