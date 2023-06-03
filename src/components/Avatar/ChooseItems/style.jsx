import styled from 'styled-components';
import arrow from '../../../assets/arrow.svg';

export const WrapOptions = styled.div`
    gap: 15rem;
    display: flex;
    width: 520rem;
    max-width: 100%;
    position: relative;
    padding-top: 25rem;
    margin-top: 20rem;

    [data-testid="carousel"] {
        div {
            display: flex;
            align-items: center;
            /* gap: 0 5rem; */
            /* margin-right: 10rem; */
        }

        @media (max-width: 768px) {
            /* background: green; */
            width: 450rem;
            margin: 0 auto;
            max-width: 100%;
        }
    }

    p {
        position: absolute;
        top: 0;
        left: 45rem;

        @media (max-width: 768px) {
            left: 50%;
            transform: translateX(-50%);
        }
    }

    button {
        width: 100rem;
        height: 100rem;
        min-width: 100rem;
        cursor: pointer;
        border: none;
        background-color: #ffffff;
        border: 2rem solid #000;
        display: block;
        overflow: hidden;

        @media (max-width: 768px) {
            /* background: red; */
            width: 50rem;
            height: 50rem;
            min-width: 65rem;
            min-height: 65rem;
            border: 1rem solid #000;
        }

        &:hover {
            background-color: #d8d8d8;
        }   

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(1.5);
        }

        &[data-direction="right"], &[data-direction="left"] {
            border: none;
            width: 20rem;
            height: 40rem;
            min-width: 20rem;
            background: url(${arrow});
            background-size: cover;
            background-position: center;
            transition: all ease 0.4s;

            @media (max-width: 768px) {
                min-width: 25rem;
                width: 25rem;
                height: 20rem;
                background-size: contain;
                background-repeat: no-repeat;
            }
        }

        &[data-direction="right"] {
            margin-left: 20rem;
        }

        &[data-direction="left"] {
            margin-right: 20rem;
            transform: rotate(180deg);
        }
    }
`