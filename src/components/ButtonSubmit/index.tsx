import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonSubmitProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title: string;
}

export const ButtonSubmit = ({ title }: ButtonSubmitProps) => {
    return (
        <Container type="submit">
            {title}
        </Container>
    );
};