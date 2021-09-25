import React from 'react';
import { Container } from './styles';
import GoogleImg from '../../assets/google.svg';

interface ButtonGoogleProps {
    title: string;
}

export const ButtonGoogle: React.FC<ButtonGoogleProps> = ({ title }) => {
    return (
        <Container>
            <img src={GoogleImg} alt="Google.logo" className="image" />
            {title}
        </Container>
    );
};