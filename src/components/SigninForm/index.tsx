import React, { useState, ChangeEvent } from 'react';
import { Input } from '../Input';
import { Form, Container } from './styles';
import { Link } from 'react-router-dom';
import validate from 'validate.js';
import { SeparetorLine } from '../Separetor';
import { ButtonGoogle } from '../ButtonGoogle';
import { ButtonSubmit } from '../ButtonSubmit';
import { emailSchema, passwordSchema } from '../../constants/schemasValidations/auth';
import { GoogleLogin } from 'react-google-login';

interface SignInFormData {
    email: string;
    password: string;
};

const schema = {
    email: emailSchema,
    password: passwordSchema
};

export const SigninForm = () => {

    const initialValues: SignInFormData = {
        email: '',
        password: ''
    }

    const [formState, setFormState] = useState({
        isValid: false,
        values: { ...initialValues },
        errors: {} as any
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        event.persist();
        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]: event.target.value
            }
        }));
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const errors = validate(formState.values, schema);

        setFormState(formState => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {}
        }));

        if (errors) return;


    };

    const hasError = (field: any) => formState.errors[field] ? true : false;

    const responseGoogle = (response: any) => null;

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input
                    error={hasError('email')}
                    helperText={hasError('email') ? formState.errors.email[0] : null}
                    label="Email"
                    name="email"
                    variant="standard"
                    fullWidth
                    value={formState.values.email}
                    onChange={handleChange}
                    data-testid="email-login"
                />

                <Input
                    error={hasError('password')}
                    helperText={hasError('password') ? formState.errors.password[0] : null}
                    label="Password"
                    name="password"
                    type="password"
                    variant="standard"
                    fullWidth
                    value={formState.values.password}
                    onChange={handleChange}
                    data-testid="passwordlogin"
                />

                <Link className="forgot-password" to="/signup">Forgot password?</Link>

                <ButtonSubmit title='Sign in' />

            </Form>

            <SeparetorLine />

            <GoogleLogin
                clientId="617246850621-95f9qhmehd380g2df86pjhrqc84n8nij.apps.googleusercontent.com"
                render={renderProps => (
                    <ButtonGoogle
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        title="Sign in with Google"
                    />
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

            <p>New <strong>Invision?</strong><Link to="/signup">Create Account</Link></p>
        </Container>
    );
};