import React from 'react';
import Slider from 'rc-slider';
import Sound from 'react-sound';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as playerActions } from '../../store/ducks/player';

import {
  Container,
  Current,
  Progress,
  Controls,
  Volume,
  Time,
  ProgressSlider,
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = ({ player, pauseSong, playSong, nextSong, prevSong }) => (
  <Container>
    { !!player.currentSong && <Sound url={player.currentSong.file} playStatus={player.status} />}
    <Current>
      { !!player.currentSong && (
        <>
          <img
            src={player.currentSong.thumbnail}
            alt={`Capa do album ${player.currentSong.album}`}
          />
          <div>
            <span>{player.currentSong.title}</span>
            <small>{player.currentSong.author}</small>
          </div>
        </>
      )}
    </Current>
    <Progress>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button type="button" onClick={prevSong}>
          <img src={BackwardIcon} alt="Shuffle" />
        </button>
        {!!player.currentSong && player.status === Sound.status.PLAYING ? (
          <button type="button" onClick={pauseSong}>
            <img src={PauseIcon} alt="Pause" />
          </button>
        ) : (
          <button type="button" onClick={playSong}>
            <img src={PlayIcon} alt="Play" />
          </button>
        )}

        <button type="button" onClick={nextSong}>
          <img src={ForwardIcon} alt="Shuffle" />
        </button>
        <button type="button">
          <img src={RepeatIcon} alt="Shuffle" />
        </button>
      </Controls>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ED760' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:24</span>
      </Time>
    </Progress>

    <Volume>
      <img src={VolumeIcon} alt="Ícone volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#FFF' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      album: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
  pauseSong: PropTypes.func.isRequired,
  playSong: PropTypes.func.isRequired,
  nextSong: PropTypes.func.isRequired,
  prevSong: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  player: state.player,
});

const mapDispatchToProps = dispatch => bindActionCreators(playerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);
