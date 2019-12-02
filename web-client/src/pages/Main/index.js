import React, { Component } from 'react';
import Webcam from 'react-webcam';
import uuidv1 from 'uuid/v1';
import api from '../../services/api';

import { Container } from './styles';

class Main extends Component {
    state = {
        id: '',
        image: null,
        name: '',
        email: '',
        phone: '',
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = async e => {
        e.preventDefault();

        const imageSrc = this.webcam.getScreenshot();

        await this.setState({
            image: this.convertBase64ToFile(imageSrc),
            id: uuidv1(),
        });

        const data = new FormData();

        data.append('id', this.state.id);
        data.append('image', this.state.image);
        data.append('name', this.state.name);
        data.append('email', this.state.email);
        data.append('phone', this.state.phone);

        await api.post('customers', data);

        this.props.history.push(`/info/${this.state.id}`);
    };

    setRef = webcam => {
        this.webcam = webcam;
    };

    convertBase64ToFile = image => {
        const byteString = atob(image.split(',')[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i += 1) {
            ia[i] = byteString.charCodeAt(i);
        }
        const newBlob = new Blob([ab], {
            type: 'image/jpeg',
        });
        return newBlob;
    };

    render() {
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: 'user',
        };

        return (
            <Container>
                <form onSubmit={this.handleSubmit}>
                    <Webcam
                        audio={false}
                        height={300}
                        ref={this.setRef}
                        screenshotFormat="image/jpeg"
                        width={450}
                        videoConstraints={videoConstraints}
                    />
                    <input
                        type="hidden"
                        name="id"
                        value={this.state.id}
                        onChange={this.handleChange}
                    />

                    <label>Nome</label>
                    <input
                        placeholder="Digite o nome"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />

                    <label>Email</label>
                    <input
                        name="email"
                        placeholder="Digite o email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <label>Telefone</label>
                    <input
                        placeholder="Digite o telefone"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />

                    <button className="btn" type="submit">
                        Salvar
                    </button>
                </form>
            </Container>
        );
    }
}

export default Main;
