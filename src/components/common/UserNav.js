import React from 'react';
import styled from 'styled-components';

function UserNav({label}) {
  return <Container>{label}</Container>;
}

const Container = styled.div`
  border-radius:50%; 
  padding:10px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.colors.white};
`;

export default UserNav;
