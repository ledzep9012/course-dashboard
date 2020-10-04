import React from 'react';
import styled from 'styled-components';
import { mediaQueries, mediaQueriesMax } from '../mediaQueries';
import Header from './header/Header';
import Dashboard from './dashboard/Dashboard';

function AppContainer() {
  return (
    <AppWrapper>
      <Header />
      <Dashboard />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  ${mediaQueries('md')`
    width: 80%;
    padding: 2em;
  `};
   ${mediaQueriesMax('md')`
    width: 95%;
    padding: 0.5em;
  `};
`;

export default AppContainer;
