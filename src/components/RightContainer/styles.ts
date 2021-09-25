import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    background: var(--white);
    padding: 8rem 5rem;
    align-items: center;
    justify-content: center;

    p {
        font-family: 'Mulish', sans-serif;
        font-weight: 700;
        font-size: 35px;
        text-align: right;
    }

    .title{
        color: var(--grey);
        text-align: center;
        margin-top: 3.5rem;
    }

    .content{
        margin-top: 3.5rem;
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;