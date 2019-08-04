import React from 'react';
import PropTypes from 'prop-types';

import { Content } from '../styles/components';

const LoginLayout = ({ children }) => (
  <Content>
    {children}
  </Content>
);

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LoginLayout;
