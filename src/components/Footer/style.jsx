import styled from 'styled-components'

export const Footer = styled.footer`
    background: #3c4e66;
    margin-top: 100px;
    padding: 75px 0;
    
    .wrapButtons {
        display: flex;
        gap: 30px;
        justify-content: center;
        padding: 0 0 50px;
    }

    p {
        font-size: 16px;
        display: flex;
        color: #fff;
        align-items: center;
        justify-content: center;

        a {
            text-decoration: none;
            margin: 0 10px;
            color: #fff;
            padding: 5px 10px;
            border: 2px solid white;
            border-radius: 10px;
            transition: all ease 0.4s;

            &:hover {
                background: #ffffff28;
            }
        }

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
                transform: scale(1.25);
            }
        }
    }
`