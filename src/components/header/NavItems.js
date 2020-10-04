import React, { useState } from 'react';
import styled, {css} from 'styled-components';

function NavItems() {
  const [active, setActive] = useState(0);
  const menuItems = ['Home', 'Tracks', 'Courses', 'About'];
  return (
    <Container>
      {menuItems.map((menuItem, index) => (
        <NavItem
          active={active === index}
          onClick={() => setActive(index)}
          key={`${menuItem}-${index}`}
        >
          {menuItem}
        </NavItem>
      ))}
    </Container>
  );
}

const NavItem = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin: 2em;
  color: ${({ theme }) => theme.colors.black};
  transition: all 300ms ease-in-out;
  :hover {
    color: ${({ theme }) => theme.primary};
  }
  ${({ active, theme }) =>
    active &&
    css`
        color: ${theme.primary};
        :after {
            content: '  ';
            height: 4px;
            width: 18px;
            position: absolute;
            left: 50%;
            bottom: -16px;
            margin-top: 8px;
            margin-left: -9px;
            border-radius: 6px;
            background-color: ${theme.primary};
        }
    `}
`;

const Container = styled.div`
  display: flex;
  flex: .75;
  position: relative;
`;

export default NavItems;
