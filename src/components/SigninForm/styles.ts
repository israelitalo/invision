import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    width: 70%;
    min-width: 320px;

    p {
        color: var(--grey);
        font-size: 14px;
        text-decoration: none;
    }

    a {
        color: var(--green);
        margin-left: 0.2rem;
        font-size: 16px;
    }
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
`;