import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '../../store/ducks/modal';

import image from '../../services/image';

import Loading from '../Loading';

import {
  Overlay, Container, Image,
} from './styles';

import MusicIcon from '../../assets/images/music.svg';

class CreatePlaylist extends Component {
  state = {
    imageUrl: null,
    imageRequest: null,
  }

  static propTypes = {
    postModalDataRequest: PropTypes.func.isRequired,
    modal: PropTypes.shape({
      opened: PropTypes.bool,
      loading: PropTypes.bool,
    }).isRequired,
    closeModal: PropTypes.func.isRequired,
  }

  handleSubmit = (data) => {
    const { postModalDataRequest } = this.props;
    postModalDataRequest(data);
  };

  handleImageChange = async (e) => {
    const imageUrl = e.target.value;
    let imageRequest;
    try {
      imageRequest = image(imageUrl);
      this.setState({ imageUrl });
      this.setState({ imageRequest });
    } catch (err) {
      this.setState({ imageRequest: null });
    }
  };

  render() {
    const { modal: { opened, loading }, closeModal } = this.props;
    const { imageRequest, imageUrl } = this.state;
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

    return opened && (
      <Overlay>
        <Container>
          <header>
            <h1>Criar Playlist</h1>
            <button type="button" onClick={closeModal} />
          </header>
          <div>
            <Image>
              <img src={imageRequest ? imageUrl : MusicIcon} alt="Ícone nota musical" />
            </Image>
            <Form onSubmit={this.handleSubmit} className="form_create" schema={schema}>
              <p>Nome</p>
              <Input type="text" name="title" placeholder="Minha playlist #3" />
              <p>URL do album</p>
              <Input type="text" name="album" placeholder="https://..." onChange={this.handleImageChange} />
              <p>Descrição</p>
              <Input
                multiline
                name="description"
                placeholder="Dê à sua playlist uma descrição cativante."
              />
              {!loading ? (<button type="submit">CRIAR</button>) : (<Loading />)}
            </Form>
          </div>
        </Container>
      </Overlay>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylist);
