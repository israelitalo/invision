import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --white: #FFFFFF;
        --background: #d6d6d6;
        --red: #E52E4D;
        --green: #A9C5BA;
        --grey: #707070;
        --black: #000000;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background: var(--white);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Mulish', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6{
        font-family: 'Mulish', sans-serif;
        font-weight: 400;
    }

    strong{
        font-family: 'Mulish', sans-serif;
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`