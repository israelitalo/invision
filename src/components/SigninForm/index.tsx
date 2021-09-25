import React, { useState, ChangeEvent } from 'react';
import { Input } from '../Input';
import { Form } from './styles';
import validate from 'validate.js';

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
        <Form onSubmit={handleSubmit}>
            <Input
                error={hasError('email')}
                helperText={hasError('email') ? formState.errors.email[0] : null}
                label="Email"
                name="email"
                //type="email"
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
            <button type="submit">Add</button>
        </Form>
    );
};