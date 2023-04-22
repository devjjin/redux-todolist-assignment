import React from 'react';
import GlobalStyle from '../components/GlobalStyle';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <div>{children}</div>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

export default Layout;