import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  flex: 1;
  margin-top: 110px;
  display: flex;
  flex-direction: column;

  ${Spinner} {
    height: 48px;
  }

  ${props => props.loading && css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #FFF;
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  &>* {
    flex: 1 1 160px;
    margin-right: 20px;
  }
`;

export const Playlist = styled(Link)`
  display: flex;
  flex-direction: column;
  color: #FFF;
  max-width: 250px;
  text-decoration: none;
  margin-top: 20px;

  img {
    height: 250px;
  }

  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #FFF;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }

  &:hover img {
    opacity: 0.4;
  }
`;
