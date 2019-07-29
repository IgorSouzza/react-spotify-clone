import React from 'react';
import Slider from 'rc-slider';
import Sound from 'react-sound';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

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
// import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = ({ player }) => (
  <Container>
    { !!player.currentSong && (
      <Sound url={player.currentSong.file} playStatus={player.status} />
    )}
    <Current>
      <img
        src="https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21198/large_thumb_placeit__88_.jpg"
        alt="Capa do album"
      />
      <div>
        <span>Havana</span>
        <small>Camila Cabello</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button type="button">
          <img src={BackwardIcon} alt="Shuffle" />
        </button>
        <button type="button">
          <img src={PlayIcon} alt="Shuffle" />
        </button>
        <button type="button">
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
    }),
    status: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  player: state.player,
});

export default connect(mapStateToProps)(Player);
