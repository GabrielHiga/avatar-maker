import styled from 'styled-components'

export const Footer = styled.footer`
    background: red;
    margin-top: 100px;
    padding: 100px 0;

    p {
        font-size: 20px;
        display: flex;
        align-items: center;

        span {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            overflow: hidden;
            display: inline-block;
            margin: 0 10px;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
`