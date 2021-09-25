import { Container } from './styles';

interface RightContainerProps {
    title: string;
    children: React.ReactNode
}

export const RightContainer = ({ title, children }: RightContainerProps) => {
    return (
        <Container>
            <p>Invision</p>
            <h1 className="title">{title}</h1>
            <div className="content">
                {children}
            </div>
        </Container>
    );
};