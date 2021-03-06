import { LeftContainer } from '../../components/LeftContainer';
import { RightContainer } from '../../components/RightContainer';
import { SignupForm } from '../../components/SignupForm';

import { Container } from './styles';

export const Signup = () => {
    return (
        <Container>
            <LeftContainer />
            <RightContainer
                title="Getting Started"
            >
                <SignupForm />
            </RightContainer>
        </Container>
    );
};