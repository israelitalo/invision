import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { SigninForm } from '.';

test('Sign in verify input the name email and password', () => {
    render(
        <MemoryRouter>
            <SigninForm />
        </MemoryRouter>
    );
    const inputEmail = screen.getByTestId('email-login');
    const inputPassword = screen.getByTestId('passwordlogin');
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
});

test('Sign in search class error in input email', () => {
    render(
        <MemoryRouter>
            <SigninForm />
        </MemoryRouter>
    );
    const inputEmail = screen.getByTestId("email-login");
    expect(inputEmail).not.toHaveClass('Mui-error');
    const inputPassword = screen.getByTestId('passwordlogin');
    expect(inputPassword).not.toHaveClass('Mui-error');
});
