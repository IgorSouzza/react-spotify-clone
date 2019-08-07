import styled from 'styled-components';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-self: center;
  form {
    display: flex;
    flex-direction: column;

    input {
      background: #404040;
      border: none;
      color: #c4ccce;
      margin: 10px 0;
      padding: 10px;

      &::placeholder {
        color: #c4ccce;
      }
    }

    button {
      background: #1DB954;
      border: none;
      border-radius: 25px;
      color: #FFF;
      width: 100px;
      padding: 10px 0;
      margin: 20px auto;
    }

    ${Spinner} {
      margin: 20px auto;
      width: 25px;
    }
  }
`;

export const Logo = styled.div`
  text-align: center;
  img {
    margin: 50px 0 30px 0;
    width: 150px;
  }
`;

export const Facebook = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  button {
    border: none;
    border-radius: 25px;
    background: #3B5998;
    color: #FFF;
    padding: 10px 0;
    font-weight: 600;

  }

  span {
    color: #CECECE;
    margin-top: 10px;
    position: relative;
    & > div {
      width: 42%;
      height: 1px;
      background: #454545;
      position: absolute;
      top: 45%;

      &:last-child {
        right: 0;
      }
    }
  }
`;
