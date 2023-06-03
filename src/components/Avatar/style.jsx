import styled from 'styled-components'

export const WrapperAvatar = styled.section`
    gap: 40rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    /* background: #13e4e4; */
    /* flex-wrap: wrap; */
    max-width: 100%;
    margin-bottom: 100rem;

    @media (max-width: 980px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 150rem;
    }

    .wrapChooseItems {
        width: 50%;
        display: flex;
        max-width: 100%;
        padding-right: 30rem;
        flex-direction: column;
        /* background: orange; */

        @media (max-width: 980px) {
            width: 100%;
            padding: 0 20rem;
            align-items: center;
        }

        .downloadButton {
            margin: 50rem auto 0;

            @media (max-width: 980px) {
                position: absolute;
                bottom: -80rem;
            }
        }
    }
`

export const WrapTitle = styled.div`
    text-align: center;
    padding: 100rem 0;
    position: relative;

    h1 {
        font-size: 64rem;
    }

    .itemGraphism {
        border-radius: 50%;
        width: 120rem;
        height: 120rem;
        position: absolute;
        overflow: hidden;
        border: 2rem solid #000;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(1.05);
        }

        &.graphism_01 {
            top: 25rem;
            left: 10rem;
        }

        &.graphism_02 {
            top: 130rem;
            left: 17%;
        }

        &.graphism_03 {
            top: 130rem;
            right: 17%;
        }

        &.graphism_04 {
            top: 25rem;
            right: 10rem;
        }
    }
`