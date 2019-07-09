import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  width: 200px;
  background: #121212;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: hidden;

  > div {
    padding: 20px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      background: transparent;
    }
  }
`;

export const Nav = styled.nav`
  list-style: none;
  margin-top: 25px;

  &:first {
    margin: 0;
  }

  li {
    a {
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      line-height: 32px;
      font-weight: ${props => (props.main ? 'bold' : 'normal')};

      &:hover {
        color: #FFF;
      }
    }

    span {
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: 300;
    }
  }
`;

export const NewPlaylist = styled.button`
  background: transparent;
  border: 0;
  border-top: 1px solid #282828;
  color: #b3b3b3;
  font-size: 13px;
  display: flex;
  align-items: center;
  padding: 15px 25px;
  cursor: pointer;

  &:hover {
    color: #FFF;
  }

  img {
    margin-right: 10px;
  }
`;
