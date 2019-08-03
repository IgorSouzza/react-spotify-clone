import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsAction } from '../../store/ducks/playlists';

import Loading from '../../components/Loading';

import {
  Container,
  Title,
  List,
  Playlist,
} from './styles';


class Browse extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        description: PropTypes.string,
      })),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    const { getPlaylistsRequest } = this.props;
    getPlaylistsRequest();
  }

  renderBrowse = () => {
    const { playlists } = this.props;
    return (
      <Container>
        <Title>Navegar</Title>

        <List>
          {playlists.data.map(playlist => (
            <Playlist to={`/playlists/${playlist._id}`} key={playlist._id}>
              <img
                src={playlist.thumbnail}
                alt={playlist.title}
              />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </Playlist>
          ))}
        </List>
      </Container>
    );
  };

  render() {
    const { playlists } = this.props;
    return playlists.loading ? (
      <Container loading={1}>
        <Loading />
      </Container>
    ) : this.renderBrowse();
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
