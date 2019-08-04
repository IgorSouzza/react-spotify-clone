import React from 'react';
import PropTypes from 'prop-types';

import { Content, Container } from '../styles/components';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ErrorBox from '../components/ErrorBox';
import Player from '../components/Player';
import CreatePlaylist from '../components/CreatePlaylist';

const HomeLayout = ({ children }) => (
  <>
    <Container>
      <Sidebar />
      <Content>
        <Header />
        <ErrorBox />
        {children}
      </Content>
    </Container>
    <Player />
    <CreatePlaylist />
  </>
);

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;
