import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';
import GoogleImg from '../../assets/google.svg';

interface ButtonGoogleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

export const ButtonGoogle: React.FC<ButtonGoogleProps> = ({ title, ...rest }) => {
    return (
        <Container
            {...rest}
        >
            <img src={GoogleImg} alt="Google.logo" className="image" />
            {title}
        </Container>
    );
};