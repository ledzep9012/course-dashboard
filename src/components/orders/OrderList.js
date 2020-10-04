import React from "react";
import styled from "styled-components";
import { mediaQueries, mediaQueriesMax } from "../../mediaQueries";
import OrderCard from "./OrderCard";

const orders = [
  {
    name: "Advance Track for Sr. Programmer",
    orderId: "5995030209928",
    orderDate: "28-08-2020",
    originalPrice: "3,250",
    currentPrice: "2,400",
    status: "Failed",
  },
  {
    name: "Advance Track for Sr. Programmer",
    orderId: "5995030209928",
    orderDate: "28-08-2020",
    originalPrice: "3,250",
    currentPrice: "2,400",
    status: "Pending",
  },
  {
    name: "Advance Track for Sr. Programmer",
    orderId: "5995030209928",
    orderDate: "28-08-2020",
    originalPrice: "3,250",
    currentPrice: "2,400",
    status: "Completed",
  },
];

function OrderList() {
  return (
    <OrderContainer>
      <OrderLabel>Order History</OrderLabel>
      {orders.map((order, index) => (
        <OrderCard key={index} {...order} />
      ))}
    </OrderContainer>
  );
}

const OrderContainer = styled.div`
  height: 100%;
  width: 100%;
  ${mediaQueries("md")`
    padding: 1em;
  `};
  ${mediaQueriesMax("md")`
    padding: 0;
  `};
`;

const OrderLabel = styled.div`
  ${mediaQueries("sm")`
    display: none;
  `};
  ${mediaQueriesMax("md")`
    color: black;
    font-size: 18px;
    font-weight: 700;
    margin: 2em 0;
  `};
`;
export default OrderList;
