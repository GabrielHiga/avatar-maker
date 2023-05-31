import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex; 
    flex-direction: column;
`

export const WrapImage = styled.div`
    width: 500px;
    height: 500px;
    min-width: 320px;
    position: relative;
    background: ${(props) => props.color};
    border: 2px solid #000;

    img {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
    }
`