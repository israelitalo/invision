import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    border: 0;
    margin: 1.5rem 0;
    height: 45px;
    min-height: 45px;
    padding: 0.5rem 2rem;
    border-radius: 100px;

    font-family: 'Lato', sans-serif;
    font-weight: bold;

    background: var(--white);
    box-shadow: 0px 3px 6px var(--background);

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.9);
    }

    .image{
        margin-right: 1rem;
    }
`;