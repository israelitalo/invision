import { LeftContainer } from '../../components/LeftContainer';
import { RightContainer } from '../../components/RightContainer';
import { SigninForm } from '../../components/SigninForm';

import { Container } from './styles';

export const Signin = () => {
    return (
        <Container>
            <LeftContainer />
            <RightContainer
                title="Welcome to Invision"
            >
                <SigninForm />
            </RightContainer>
        </Container>
    );
};