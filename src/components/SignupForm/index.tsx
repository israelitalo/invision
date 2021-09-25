import React, { useState, ChangeEvent } from 'react';
import { Input } from '../Input';
import { Form, Container } from './styles';
import { Link } from 'react-router-dom';
import validate from 'validate.js';
import { SeparetorLine } from '../Separetor';
import { ButtonGoogle } from '../ButtonGoogle';
import { ButtonSubmit } from '../ButtonSubmit';

interface SignupFormData {
    email: string;
    password: string;
    name: string;
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
    },
    name: {
        presence: { allowEmpty: false, message: '^*Este campo não pode ser vazio' }
    }
};

export const SignupForm = () => {

    const initialValues: SignupFormData = {
        email: '',
        password: '',
        name: ''
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
                    error={hasError('name')}
                    helperText={hasError('name') ? formState.errors.name[0] : null}
                    label="Full name"
                    name="name"
                    variant="standard"
                    fullWidth
                    value={formState.values.name}
                    onChange={handleChange}
                />

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
                    label="Create Password"
                    name="password"
                    type="password"
                    variant="standard"
                    fullWidth
                    value={formState.values.password}
                    onChange={handleChange}
                />

                <ButtonSubmit title='Sign up' />

            </Form>

            <SeparetorLine />

            <ButtonGoogle title="Sign up with Google" />

            <p>By signing up, you agree to <strong>Invision</strong></p>

            <div className="container-terms">
                <Link to="#">Terms of Conditions</Link><p>and</p><Link to="#">Privacy Policy</Link>
            </div>

            <p>Already an <strong>Invision?</strong><Link to="/">Log in</Link></p>
        </Container>
    );
};