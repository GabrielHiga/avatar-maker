import styled from 'styled-components'

export const WrapperAvatar = styled.section`
    gap: 40px;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    .wrapChooseItems {
        display: flex;
        flex-direction: column;

        .downloadButton {
            margin: 50px auto 0;
        }
    }
`

export const WrapTitle = styled.div`
    text-align: center;
    padding: 100px 0;
    /* background-color: red; */
    position: relative;

    h1 {
        font-size: 64px;
    }

    .itemGraphism {
        border-radius: 50%;
        width: 120px;
        height: 120px;
        position: absolute;
        overflow: hidden;
        border: 2px solid #000;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scale(1.05);
        }

        &.graphism_01 {
            top: 25px;
            left: 10px;
        }

        &.graphism_02 {
            top: 130px;
            left: 17%;
        }

        &.graphism_03 {
            top: 130px;
            right: 17%;
        }

        &.graphism_04 {
            top: 25px;
            right: 10px;
        }
    }
`