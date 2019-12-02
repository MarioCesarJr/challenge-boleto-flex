import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    margin: 0 auto 0;
    max-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        display: flex;
        flex-direction: column;

        label {
            font-size: 14px;
            color: #444;
            font-weight: bold;
            margin-bottom: 8px;
        }

        input {
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 2px;
            height: 35px;
            padding: 0 15px;
        }

        button.btn {
            border: 0;
            border-radius: 2px;
            width: 100%;
            height: 42px;
            padding: 0 20px;
            font-size: 16px;
            font-weight: bold;
            background: #2c2e60;
            color: #fff;

            &:hover {
                background: ${darken(0.03, '#2c2e64')};
            }
        }
    }
`;
