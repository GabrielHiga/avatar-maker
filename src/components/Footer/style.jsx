import styled from 'styled-components'

export const Footer = styled.footer`
    background: #3c4e66;
    margin-top: 100rem;
    padding: 75rem 0;
    
    .wrapButtons {
        display: flex;
        gap: 30rem;
        justify-content: center;
        padding: 0 0 50rem;
    }

    p {
        font-size: 16rem;
        display: flex;
        color: #fff;
        align-items: center;
        justify-content: center;

        a {
            text-decoration: none;
            margin: 0 10rem;
            color: #fff;
            padding: 5rem 10rem;
            border: 2rem solid white;
            border-radius: 10rem;
            transition: all ease 0.4s;

            &:hover {
                background: #ffffff28;
            }
        }

        span {
            width: 45rem;
            height: 45rem;
            border-radius: 50%;
            overflow: hidden;
            display: inline-block;
            margin: 0 10rem;

            img {
                width: 100%;
                height: 100%;
                transform: scale(1.25);
            }
        }
    }
`