import React from 'react';
import { Container } from './styles';

interface PageProps {
    children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => {
    return (
        <Container>
            {children}
        </Container>
    );
};