import React from 'react';

import GlobalStyle from './styles/global';
import { Wrapper, Container, Content } from './styles/components';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Player from './components/Player';

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Content>
          <Header />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  );
}

export default App;
