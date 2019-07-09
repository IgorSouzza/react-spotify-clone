import React from 'react';

import {
  Container,
  Title,
  List,
  Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21198/large_thumb_placeit__88_.jpg"
          alt="Album"
        />
        <strong>Rap Caviar</strong>
        <p>Relaxe enquanto você programa ouvindo as melhores do rap internacional!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
