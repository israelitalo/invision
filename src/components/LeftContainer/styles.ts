import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    background: var(--green);
    padding: 2rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        height: 50vh;
    }
`;