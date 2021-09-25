//import { useHistory } from 'react-router-dom';
//import { Page } from '../../components/Page';
import { LeftContainer } from '../../components/LeftContainer';
import { RightContainer } from '../../components/RightContainer';
import { SigninForm } from '../../components/SigninForm';

import { Container } from './styles';

export const Signin = () => {

    //const history = useHistory();

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