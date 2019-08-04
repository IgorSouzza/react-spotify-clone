import React from 'react';
import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

const Routes = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

Routes.propTypes = {
  component: PropTypes.elementType.isRequired,
  layout: PropTypes.elementType.isRequired,
};

export default Routes;
