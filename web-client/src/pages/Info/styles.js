import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #2c2e60;
    padding: 30px;
    margin: 20px auto;
`;

export const Customer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        color: #2c2e60;
        text-decoration: underline;
        font-size: 20px;
    }

    img {
        width: 560px;
        height: 330px;

        margin-top: 20px;
    }

    h1 {
        font-size: 24px;
        margin-top: 10px;
    }

    p {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;
    }
`;
