import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { SignupForm } from '.';

test('Sign up verify input the name name, email and password', () => {
    render(
        <MemoryRouter>
            <SignupForm />
        </MemoryRouter>
    );
    const inputName = screen.getByTestId('name-signup');
    const inputPassword = screen.getByTestId('password-signup');
    const inputEmail = screen.getByTestId('email-signup');
    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
});

test('Sign up search class error in inputs', () => {
    render(
        <MemoryRouter>
            <SignupForm />
        </MemoryRouter>
    );
    const inputName = screen.getByTestId('name-signup');
    const inputEmail = screen.getByTestId("email-signup");
    const inputPassword = screen.getByTestId('password-signup');
    expect(inputName).not.toHaveClass('Mui-error');
    expect(inputEmail).not.toHaveClass('Mui-error');
    expect(inputPassword).not.toHaveClass('Mui-error');
});
