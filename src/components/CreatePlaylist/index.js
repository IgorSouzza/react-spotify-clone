import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '../../store/ducks/modal';

import {
  Overlay, Container, Image,
} from './styles';

import MusicIcon from '../../assets/images/music.svg';

const CreatePlaylist = ({ modal: { opened }, closeModal, postModalDataRequest }) => {
  const schema = Yup.object().shape({
    title: Yup.string()
      .default('Insira um título')
      .required('Insira um título'),
    album: Yup.string()
      .default('Insira uma capa para o álbum')
      .required('Insira uma capa para o álbum'),
    description: Yup.string()
      .default('Insira uma capa para o álbum'),
  });

  const handleSubmit = (data) => {
    postModalDataRequest(data);
  };

  return opened && (
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
          <Form onSubmit={handleSubmit} className="form_create" schema={schema}>
            <p>Nome</p>
            <Input type="text" name="title" placeholder="Minha playlist #3" />
            <p>URL do album</p>
            <Input type="text" name="album" placeholder="https://..." />
            <p>Descrição</p>
            <Input
              multiline
              name="description"
              placeholder="Dê à sua playlist uma descrição cativante."
            />
            <button type="submit">CRIAR</button>
          </Form>
        </div>
      </Container>
    </Overlay>
  );
};

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylist);
