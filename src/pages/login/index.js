import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoginActions } from '../../store/ducks/login';

import Loading from '../../components/Loading';

import { Container, Logo, Facebook } from './styles';

import LogoIcon from '../../assets/images/logo.png';

const Login = ({ login: { loading }, loginRequest }) => {
  const handleSubmit = (data) => {
    loginRequest(data);
    console.log(loading);
  };

  return (
    <Container>
      <Logo>
        <img src={LogoIcon} alt="Spoticlone Logo" />
      </Logo>
      <Facebook>
        <button type="button">LOG IN COM O FACEBOOK</button>
        <span><div /> OU <div /></span>
      </Facebook>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="user" placeholder="Email ou usuário" />
        <Input type="password" name="password" placeholder="Senha" />
        {loading ? (<Loading />) : (<button type="submit">LOG IN</button>)}
      </Form>
    </Container>
  );
};

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
