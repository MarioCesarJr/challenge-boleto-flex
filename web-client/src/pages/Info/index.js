import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, Customer } from './styles';

class Info extends Component {
    state = {
        customer: {},
    };

    async componentDidMount() {
        const { match } = this.props;

        const response = await api.get(`customers/${match.params.id}`);
        this.setState({
            customer: response.data,
        });
    }

    render() {
        const { customer } = this.state;

        return (
            <Container>
                <Customer>
                    <Link to="/">Voltar</Link>
                    <img src={customer.url} alt={customer.url} />

                    {customer.name && <h1>{customer.name}</h1>}
                    {customer.email && <p>Email: {customer.email}</p>}
                    {customer.phone && <p>Telefone: {customer.phone}</p>}
                </Customer>
            </Container>
        );
    }
}

export default Info;
