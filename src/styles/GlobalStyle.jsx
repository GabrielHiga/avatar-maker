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
        }
    }
`

export const Container = styled.div`
    width: 1280px;
    max-width: 100%;
    padding: 0 30px;
    margin: 0 auto;
`

export const Button = styled.button`
    border: none;
    font-size: 22px;
    cursor: pointer;
    padding: 10px 50px;
    width: fit-content;
    position: relative;
    border-radius: 10px;
    border: 2px solid #000;
    background-color: #fff;
    transition: all ease 0.4s;
    box-shadow: 6px 6px 0px 0px rgba(0,0,0,0.75);

    &:hover {
        transform: translate(6px, 6px);
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75);
    }
`