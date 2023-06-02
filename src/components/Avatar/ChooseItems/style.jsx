import styled from 'styled-components';
import arrow from '../../../assets/arrow.svg';

export const WrapOptions = styled.div`
    gap: 15px;
    display: flex;
    width: 520px;
    max-width: 100%;
    position: relative;
    padding-top: 25px;
    margin-top: 20px;

    [data-testid="carousel"] {
        div {
            display: flex;
            align-items: center;
        }
    }

    p {
        position: absolute;
        top: 0;
        left: 45px;
    }

    button {
        width: 100px;
        height: 100px;
        min-width: 100px;
        cursor: pointer;
        border: none;
        background-color: #fff;
        border: 2px solid #000;

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
            width: 20px;
            height: 40px;
            min-width: 20px;
            background: url(${arrow});
            background-size: cover;
            background-position: center;
            transition: all ease 0.4s;
        }

        &[data-direction="right"] {
            margin-left: 20px;
        }

        &[data-direction="left"] {
            margin-right: 20px;
            transform: rotate(180deg);
        }
    }
`