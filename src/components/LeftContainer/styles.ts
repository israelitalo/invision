import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--green);

    @media (max-width: 768px) {
        height: 75vh;
    }
`;