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