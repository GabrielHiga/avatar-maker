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
        }
    }

    p {
        position: absolute;
        top: 0;
        left: 45rem;
    }

    button {
        width: 100rem;
        height: 100rem;
        min-width: 100rem;
        cursor: pointer;
        border: none;
        background-color: #ffffff;
        border: 2rem solid #000;

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