import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { PriceData, Tabs } from "./Coin";

interface PriceProps {
  tickersData?: PriceData;
}

const TabBox = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  text-transform: uppercase;
  background-color: white;
  border-radius: 10px;
`;

const Tab = styled.span<{ isActive?: boolean }>`
  font-size: 35px;
  font-weight: 400;
  color: ${(props) => (props.isActive ? "tomato" : "green")};
  &:first-child {
    font-size: 15px;
    color: black;
  }
`;

function Price({ tickersData }: PriceProps) {
  const [price, setPrice] = useState<PriceData>();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setPrice(tickersData);
    setLoading(false);
  }, [tickersData]);

  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <Tabs>
          <TabBox>
            <Tab>percent_change_24h</Tab>
            <Tab isActive={Number(price?.quotes.USD.percent_change_24h) > 0}>
              {price?.quotes.USD.percent_change_24h} %
            </Tab>
          </TabBox>
          <TabBox>
            <Tab>percent_change_12h</Tab>
            <Tab isActive={Number(price?.quotes.USD.percent_change_12h) > 0}>
              {price?.quotes.USD.percent_change_12h} %
            </Tab>
          </TabBox>
          <TabBox>
            <Tab>percent_change_6h</Tab>
            <Tab isActive={Number(price?.quotes.USD.percent_change_6h) > 0}>
              {price?.quotes.USD.percent_change_6h} %
            </Tab>
          </TabBox>
          <TabBox>
            <Tab>percent_change_1h</Tab>
            <Tab isActive={Number(price?.quotes.USD.percent_change_1h) > 0}>
              {price?.quotes.USD.percent_change_1h} %
            </Tab>
          </TabBox>
        </Tabs>
      )}
    </div>
  );
}

export default Price;
