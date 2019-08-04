import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container, Logo, Facebook } from './styles';

import LogoIcon from '../../assets/images/logo.png';

export default function Login() {
  return (
    <Container>
      <Logo>
        <img src={LogoIcon} alt="Spoticlone Logo" />
      </Logo>
      <Facebook>
        <button type="button">LOG IN COM O FACEBOOK</button>
        <span><div /> OU <div /></span>
      </Facebook>
      <Form>
        <Input type="text" name="user" placeholder="Email ou usuário" />
        <Input type="password" name="password" placeholder="Senha" />
        <button type="submit">LOG IN</button>
      </Form>
    </Container>
  );
}
