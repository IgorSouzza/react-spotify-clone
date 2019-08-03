import styled from 'styled-components';

import CloseIcon from '../../assets/images/close.svg';

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.8);;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  background: #282828;
  padding: 0 20px;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0;
    h1 {
      width: 100%;
      text-align: center;
      font-size: 20px;
    }
    button {
      width: 20px;
      background: transparent url(${CloseIcon}) no-repeat center;
      border: none;
    }
  }

  & > div {
    display: flex;
    flex-direction: row;
  }
`;

export const Image = styled.div`
  display: flex;
  padding: 0px 90px;
  background: #404040;
  margin-right: 20px;
  height: 210px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: #B3B3B3;
    display: flex;
    flex-direction: column;
  }

  input, textarea {
    border: none;
    border-radius: 2px;
    margin: 10px 0;
    padding: 8px 10px;
  }

  textarea {
    height: 42px;
    resize: none;
  }

  button {
    background: #1DB954;
    border: none;
    border-radius: 25px;
    color: #FFF;
    margin: 10px 0 20px 20px;
    width: 120px;
    padding: 8px 0;
  }
`;
