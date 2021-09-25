import styled from "styled-components";

export const Separetor = styled.div`
    width: 80%;
    font-size: 14px;
    color: var(--grey);
    margin: 0 3rem;
    display: flex;
    align-items: center;

    &::before {
        content: "";
        flex: 1;
        height: 1px;
        background: var(--background);
        margin-right: 16px;
    }

    &::after {
        content: "";
        flex: 1;
        height: 1px;
        background: var(--background);
        margin-left: 16px;
    }
`;