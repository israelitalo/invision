import React, { useState, ChangeEvent } from 'react';
import { Input } from '../Input';
import { Form, Container } from './styles';
import { Link } from 'react-router-dom';
import validate from 'validate.js';
import { SeparetorLine } from '../Separetor';
import { ButtonGoogle } from '../ButtonGoogle';
import { ButtonSubmit } from '../ButtonSubmit';

interface SignInFormData {
    email: string;
    password: string;
};

const schema = {
    email: {
        presence: { allowEmpty: false, message: '^*Este campo não pode ser vazio' },
        email: { message: '^O e-mail está incorreto' },
    },
    password: {
        presence: { allowEmpty: false, message: '^*Este campo não pode ser vazio' },
        length: {
            minimum: 6,
            message: "^A senha não pode ter menos de 6 caracteres"
        }
    }
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

        console.log('submit');
    };

    const hasError = (field: any) => formState.errors[field] ? true : false;

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
                />

                <Link className="forgot-password" to="/signup">Forgot password?</Link>

                <ButtonSubmit title='Sign in' />

            </Form>

            <SeparetorLine />

            <ButtonGoogle title="Sign in with Google" />

            <p>New <strong>Invision?</strong><Link to="/signup">Create Account</Link></p>
        </Container>
    );
};