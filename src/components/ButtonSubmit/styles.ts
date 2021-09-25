import styled from "styled-components";

export const Container = styled.button`
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
`;