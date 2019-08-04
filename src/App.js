import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/reactotron';
import GlobalStyle from './styles/global';
import { Wrapper } from './styles/components';

import HomeLayout from './layouts/HomeLayout';
import LoginLayout from './layouts/LoginLayout';

import Browse from './pages/browse';
import Playlist from './pages/playlist';
import Login from './pages/login';

import Routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <Switch>
            <Routes exact path="/" layout={HomeLayout} component={Browse} />
            <Routes path="/playlists/:id" layout={HomeLayout} component={Playlist} />
            <Routes path="/login" layout={LoginLayout} component={Login} />
          </Switch>
        </Wrapper>
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
