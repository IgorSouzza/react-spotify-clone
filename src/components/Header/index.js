import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => {
  const logout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('username');
    window.location = '/login';
  };

  return (
    <Container>
      <Search>
        <input placeholder="Search" />
      </Search>

      <User>
        <img src={`https://api.adorable.io/avatars/285/${Math.random()}.png`} alt="Avatar" />
        {window.localStorage.getItem('username')},
        <button type="button" onClick={logout}>Sair</button>
      </User>
    </Container>
  );
};

export default Header;
