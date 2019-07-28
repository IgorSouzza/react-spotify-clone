import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistDetailsAction } from '../../store/ducks/playlistDetails';

import Loading from '../../components/Loading';

import { Container, Header, SongList } from './styles';

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
    const { playlistDetails } = this.props;
    const { data } = playlistDetails;
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
            { !!data.songs && <p>{data.songs.length} músicas</p>}

            <button type="button">PLAY</button>
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
                <tr key={song.id}>
                  <td><img src={PlusIcon} alt="Adicionar" /></td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>4:13</td>
                </tr>
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
});
const dispatchStateToProps = dispatch => bindActionCreators(PlaylistDetailsAction, dispatch);

export default connect(mapStateToProps, dispatchStateToProps)(Playlist);
