import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: var(--white);
    padding: 4rem 5rem;

    @media (max-width: 768px){
        padding: 3rem 5rem 8rem 5rem;
    }

    > p {
        font-family: 'Mulish', sans-serif;
        font-weight: 700;
        font-size: 35px;
        text-align: right;
        width: 100%;
    }

    .title{
        color: var(--grey);
        text-align: center;
        margin-top: 2.5rem;
    }

    .content{
        width: 100%;
        //height: 100%;
        margin-top: 2.5rem;
        display: flex;
        justify-content: center;
    }
`;