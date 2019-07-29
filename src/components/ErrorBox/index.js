import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as errorActions } from '../../store/ducks/error';

import closeIcon from '../../assets/images/close.svg';

import { Container } from './styles';

const ErrorBox = ({ error: { message, visible }, hideError }) => visible && (
  <Container>
    <p>{ message }</p>
    <button type="button" onClick={hideError}>
      <img src={closeIcon} alt="Fechar" />
    </button>
  </Container>
);

ErrorBox.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
    visible: PropTypes.bool,
  }).isRequired,
  hideError: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(errorActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBox);
