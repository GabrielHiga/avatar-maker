import styled from 'styled-components'

export const Wrapper = styled.div`
    top: 0rem;
    width: 50%;
    display: flex; 
    position: sticky;
    margin-top: 45rem;
    padding-left: 30rem; 
    align-items: center;
    flex-direction: column;
    background-color: white;

    @media (max-width: 980px) {
        width: 100%;
        padding: 0;
        z-index: 3;
        padding-top: 30rem;
        bottom: 180rem;
    }

    .wrapChangeColor {
        gap: 10rem;
        display: flex;
        margin: 10rem 0;
        align-items: center;
        justify-content: center;
    }
`

export const WrapImage = styled.div`
    width: 500rem;
    height: 500rem;
    display: block;
    max-width: 100%;
    position: relative;
    border: 2rem solid #000;
    background: ${(props) => props.color};
    /* background: greenyellow; */

    @media (max-width: 1200px) {
        width: 400rem;
        height: 400rem;
    }

    /* @media (max-width: 980px) {
        width: 550rem;
        height: 550rem;
    } */

    img {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
    }
`