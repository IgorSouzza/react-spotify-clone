import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src={`https://api.adorable.io/avatars/285/${Math.random()}.png`} alt="Avatar" />
      Visitor
    </User>
  </Container>
);

export default Header;
