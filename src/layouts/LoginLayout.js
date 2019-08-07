import React from 'react';
import PropTypes from 'prop-types';

import ErrorBox from '../components/ErrorBox';

import { Content } from '../styles/components';

const LoginLayout = ({ children }) => (
  <Content>
    <ErrorBox />
    {children}
  </Content>
);

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginLayout;
