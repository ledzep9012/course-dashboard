import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import { ReactComponent as Person } from "./person.svg";
import { ReactComponent as Order } from "./order.svg";

function SideNav({ setTab }) {
  const [selected, setSelected] = useState(0);
  const menuItems = [
    { label: "Profle Details", icon: <Person /> },
    { label: "Order History", icon: <Order /> },
  ];

  useEffect(() => {
    setTab(selected);
  }, [selected]);
  
  return (
    <SideNavContainer>
      <DashboardHeading>Account Settings</DashboardHeading>
      {menuItems.map((menu, index) => (
        <MenuItem
          icon={menu.icon}
          label={menu.label}
          onClick={() => setSelected(index)}
          selected={index === selected}
          key={menu.label + index}
        />
      ))}
    </SideNavContainer>
  );
}

const SideNavContainer = styled.div`
  display: flex;
  margin-top: 1em;
  flex-direction: column;
`;

const DashboardHeading = styled.h1`
  ${({ theme }) => `
      font-size: ${theme.fontSizes.larger};
      color: ${theme.colors.black};
      font-weight: ${theme.fontWeights.heavy};
      `}
`;

export default SideNav;
