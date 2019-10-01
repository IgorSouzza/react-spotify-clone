import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoginActions } from '../../store/ducks/login';

import Loading from '../../components/Loading';

import { Container, Logo, Facebook, ToolTip, ToolTipLink } from './styles';

import LogoIcon from '../../assets/images/logo.png';

let loginView = true;

const Login = ({ login: { loading }, loginRequest, registerRequest }) => {
  const handleLoginSubmit = (data) => {
    loginRequest(data);
  };

  const handleRegisterSubmit = (data) => {
    registerRequest(data);
  };

  const switchView = (view) => {
    loginView = view;
  }

  return (
    <Container>
      <Logo>
        <img src={LogoIcon} alt="Spoticlone Logo" />
      </Logo>
      <Facebook>
        <button type="button">LOG IN COM O FACEBOOK</button>
        <span><div /> OU <div /></span>
      </Facebook>
      {loginView ?
        <Form onSubmit={handleLoginSubmit}>
          <Input type="email" name="email" placeholder="Email" required />
          <Input type="password" name="password" placeholder="Senha" required />
          {loading ? (<Loading />) : (<button type="submit">LOG IN</button>)}
          <ToolTip>Não possui uma conta? <ToolTipLink href="#" onClick={() => switchView(false)}>Cadastre-se</ToolTipLink></ToolTip>
        </Form>
        :
        <Form onSubmit={handleRegisterSubmit}>
          <Input type="text" name="username" placeholder="Usuário" required />
          <Input type="email" name="email" placeholder="Email" required />
          <Input type="password" name="password" placeholder="Senha" required />
          {loading ? (<Loading />) : (<button type="submit">REGISTRAR</button>)}
          <ToolTip>Já possui uma conta? <ToolTipLink href="#" onClick={() => switchView(true)}>Faça login</ToolTipLink></ToolTip>
        </Form>}
    </Container>
  );
};

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
