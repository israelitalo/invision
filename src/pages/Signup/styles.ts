import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    max-height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;