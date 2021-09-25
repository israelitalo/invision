import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 300px;
    width: 70%;
    min-width: 320px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .forgot-password{
        width: 100%;
        text-align: right;
        color: var(--grey);
        font-size: 14px;
        text-decoration: none;
        margin-top: 1rem;
    }

    button[type="submit"] {
        width: 175px;
        padding: 0 1.5rem;
        min-height: 45px;
        height: 45px;
        background: var(--grey);
        color: var(--white);
        border-radius: 100px;
        border: 0;
        margin: 2rem 0;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;