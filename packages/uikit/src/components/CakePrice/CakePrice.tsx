import React from "react";
import styled from "styled-components";
import LogoRound from "../Svg/Icons/LogoRound";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";
import DefiIcon from "../Svg/Icons/DefiIcon";
import { useEffect, useState } from "react";
import axios from "axios";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
  showSkeleton?: boolean;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd, color = "textSubtle", showSkeleton = true }) => {
  const [cakePrice, setCakePrice] = useState(0)  
  useEffect(() => {
    // setInterval(() => {
      fetchDefcPrice()
    // }, 30000)
  }, [])
  
  const fetchDefcPrice = () => {
    axios.get("https://api.coingecko.com/api/v3/coins/defi-coin")
      .then((res) => {
        setCakePrice(res.data.market_data.current_price.usd)
      })
  }
  
  
  return cakePriceUsd ? (
    <PriceLink
      href="https://defiswap-demo-atulinfranix-gmailcom.vercel.app/swap"
      target="_blank"
    >
      <DefiIcon width="10px" mr="12px" />&nbsp;&nbsp;
      <Text color={color} bold>{cakePrice}</Text>
    </PriceLink>
  ) : showSkeleton ? (
    <Skeleton width={80} height={24} />
  ) : null;
};

export default React.memo(CakePrice);
