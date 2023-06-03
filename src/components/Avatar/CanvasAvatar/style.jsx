import styled from 'styled-components'

export const Wrapper = styled.div`
    top: 30rem;
    width: 50%;
    display: flex; 
    position: sticky;
    margin: 45rem 0;
    align-items: center;
    flex-direction: column;
    
    @media (max-width: 980px) {
        top: 0;
        width: 100%;
        padding: 0;
        z-index: 3;
        padding-top: 30rem;
        bottom: 180rem;
        margin: 0;
        background-color: white;
        -webkit-box-shadow: 0px 12px 20px 5px rgba(0,0,0,0.08);
        -moz-box-shadow: 0px 12px 20px 5px rgba(0,0,0,0.08);
        box-shadow: 0px 12px 20px 5px rgba(0,0,0,0.08);
    }

    .wrapChangeColor {
        gap: 10rem;
        display: flex;
        margin: 10rem 0;
        align-items: center;
        justify-content: center;
        font-size: 18rem;

        @media (max-width: 768px) {
            font-size: 12rem;
        }
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
        width: 375rem;
        height: 375rem;
    }

    @media (max-width: 414px) {
        width: 300rem;
        height: 300rem;
    }

    img {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
    }
`