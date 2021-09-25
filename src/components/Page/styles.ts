import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    //width: 100vw;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;