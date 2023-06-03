import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Space Grotesk', sans-serif;

        p {
            margin: 0;
            padding: 0;
            font-size: 16rem;
        }
    }

    html {
        font-size: 6.25%; /* 1rem (aproximadamente) */
    }

    body {
        font-size: 1.6rem; /* 16rem */
    }
`

export const Container = styled.div`
    width: 1280rem;
    max-width: 100%;
    padding: 0 30rem;
    margin: 0 auto;
    position: relative;
`

export const Button = styled.button`
    border: none;
    font-size: 22rem;
    cursor: pointer;
    padding: 10rem 50rem;
    width: fit-content;
    position: relative;
    border-radius: 10rem;
    border: 2rem solid #000;
    background-color: #ffffff;
    transition: all ease 0.4s;
    box-shadow: 6rem 6rem 0rem 0rem rgba(0,0,0,0.75);

    &:hover {
        transform: translate(6rem, 6rem);
        box-shadow: 0rem 0rem 0rem 0rem rgba(0,0,0,0.75);
    }
`