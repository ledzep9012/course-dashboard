import React, { useState } from "react";
import styled from "styled-components";
import SideNav from "./SideNav";
import RightPanel from "./RightPanel";
import Media from "../../Media";
import Profile from "../profile/Profile";
import OrderList from "../orders/OrderList";

function Dashboard() {
  const [current, setCurrent] = useState(0);
  return (
    <DashboardSection>
      <Media pc>
        <LeftPanel borderColor={"lightgrey"}>
          <SideNav setTab={setCurrent} />
        </LeftPanel>
        <RightPanel current={current}></RightPanel>
      </Media>
      <Media mobile>
        <DashboardMobile>
          <Profile />
          <OrderList />
        </DashboardMobile>
      </Media>
    </DashboardSection>
  );
}

const DashboardSection = styled.section`
  display: flex;
  height: 100%;
`;

const DashboardMobile = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const LeftPanel = styled.div`
  flex: 30;
  border-right: 1px solid ${(props) => props.borderColor};
`;

export default Dashboard;
