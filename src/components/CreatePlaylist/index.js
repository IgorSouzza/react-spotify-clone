import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '../../store/ducks/modal';

import {
  Overlay, Container, Image, Form,
} from './styles';

import MusicIcon from '../../assets/images/music.svg';

const CreatePlaylist = ({ modal: { opened }, closeModal }) => opened && (
  <Overlay>
    <Container>
      <header>
        <h1>Criar Playlist</h1>
        <button type="button" onClick={closeModal} />
      </header>
      <div>
        <Image>
          <img src={MusicIcon} alt="Ícone nota musical" />
        </Image>
        <Form>
          <label htmlFor="name">
            Nome
            <input type="text" id="name" placeholder="Minha playlist #3" />
          </label>
          <label htmlFor="album">
            URL do álbum
            <input type="text" id="album" placeholder="https://..." />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              placeholder="Dê à sua playlist uma descrição cativante."
            />
          </label>
          <button type="submit">CRIAR</button>
        </Form>
      </div>
    </Container>
  </Overlay>
);

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylist);
