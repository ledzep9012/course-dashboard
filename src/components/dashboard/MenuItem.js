import React from 'react';
import styled from 'styled-components';

function MenuItem({ selected, label, icon, onClick }) {
  return (
    <MenuWrapper selected={selected} onClick={onClick}>
      {icon}
      {label}
    </MenuWrapper>
  );
}

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 1em;
  font-size: ${props => props.theme.fontSizes.large};
  height: ${({ theme }) => theme.height[2] + 'px'};
  width: 100%;
  color: ${props => (props.selected ? props.theme.primary : props.theme.colors.black)};
  border-right: 2px solid
    ${props => (props.selected ? props.theme.primary : 'transparent')};
  transition: all 100ms ease-in-out;
  :hover{
    color: ${props => props.theme.primary};
    svg{
      fill: ${props => props.theme.primary};
    }
  }
  svg {
    margin-right: 25px;
    fill: ${({ theme, selected }) => selected ? theme.primary : theme.colors.black};
  }
`;

export default MenuItem;
