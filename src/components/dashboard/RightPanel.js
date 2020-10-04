import React from "react";
import styled from "styled-components";
import OrderList from "../orders/OrderList";
import Profile from "../profile/Profile";

function RightPanel({ current }) {
  const getRightPanelView = () => {
    switch (current) {
      case 0:
        return <Profile />;
      default:
        return <OrderList />;
    }
  };
return <Wrapper>{getRightPanelView()}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex: 70;
  justify-content: center;
  transition: all 200ms ease-out;
`;

export default RightPanel;
