import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sound from 'react-sound';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import { Creators as PlayerActions } from '../../store/ducks/player';

import Loading from '../../components/Loading';

import {
  Container, Header, SongList, SongItem,
} from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
      data: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        songs: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          author: PropTypes.string,
          album: PropTypes.string,
        })),
      }),
      loading: PropTypes.bool,
    }).isRequired,
    loadSong: PropTypes.func.isRequired,
    playSong: PropTypes.func.isRequired,
    pauseSong: PropTypes.func.isRequired,
    player: PropTypes.shape({
      currentSong: PropTypes.shape({
        id: PropTypes.number,
      }),
      status: PropTypes.string,
    }).isRequired,
  }

  state = {
    selectedSong: null,
  }

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (prevProps.match.params.id !== match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    const { match } = this.props;
    const { id } = match.params;
    const { getPlaylistDetailsRequest } = this.props;

    getPlaylistDetailsRequest(id);
  }

  renderDetails = () => {
    const {
      playlistDetails, loadSong, pauseSong, playSong, player,
    } = this.props;
    const { data } = playlistDetails;
    const { selectedSong } = this.state;
    return (
      <Container>
        <Header>
          <img
            src={data.thumbnail}
            alt={data.title}
          />

          <div>
            <span>PLAYLIST</span>
            <h1>{data.title}</h1>
            {!!data.songs && <p>{data.songs.length} músicas</p>}
            {!!player.currentSong && player.status === Sound.status.PLAYING ? (
              <button
                type="button"
                onClick={pauseSong}
              >
                PAUSE
              </button>
            ) : (
              <button
                type="button"
                onClick={playSong}
              >
                PLAY
              </button>
            ) }

          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th />
              <th>Título</th>
              <th>Artista</th>
              <th>Álbum</th>
              <th><img src={ClockIcon} alt="Duração" /></th>
            </tr>
          </thead>

          <tbody>
            {!data.songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música cadastrada</td>
              </tr>
            ) : (
              data.songs.map(song => (
                <SongItem
                  key={song._id}
                  onClick={() => this.setState({ selectedSong: song._id })}
                  onDoubleClick={() => loadSong(song, data.songs)}
                  selected={selectedSong === song._id}
                  playing={player.currentSong && player.currentSong._id === song._id}
                >
                  <td><img src={PlusIcon} alt="Adicionar" /></td>
                  <td>{song.name}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>4:13</td>
                </SongItem>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  }

  render() {
    const { playlistDetails } = this.props;
    return playlistDetails.loading ? (
      <Container loading={1}>
        <Loading />
      </Container>
    ) : this.renderDetails();
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
  player: state.player,
});

const dispatchStateToProps = dispatch => bindActionCreators(
  { ...PlaylistDetailsActions, ...PlayerActions }, dispatch,
);

export default connect(mapStateToProps, dispatchStateToProps)(Playlist);
