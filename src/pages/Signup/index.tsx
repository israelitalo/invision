import { LeftContainer } from '../../components/LeftContainer';
import { RightContainer } from '../../components/RightContainer';
import { SigninForm } from '../../components/SigninForm';

import { Container } from './styles';

export const Signup = () => {
    return (
        <Container>
            <LeftContainer />
            <RightContainer
                title="Getting Started"
            >
                <SigninForm />
            </RightContainer>
        </Container>
    );
};