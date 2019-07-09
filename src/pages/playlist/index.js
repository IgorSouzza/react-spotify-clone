import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21198/large_thumb_placeit__88_.jpg"
        alt="Playlist"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>Rap Caviar</h1>
        <p>13 músicas</p>

        <button type="button">PLAY</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th><img src={ClockIcon} alt="Duração" /></th>
      </thead>

      <tbody>
        <tr>
          <td><img src={PlusIcon} alt="Adicionar" /></td>
          <td>Ransom</td>
          <td>Lil Tecca</td>
          <td>Ransom</td>
          <td>4:13</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
