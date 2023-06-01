import React from "react";
import { Container } from "../../styles/GlobalStyle";
import * as S from './style'
import { Theme } from '../../styles/Theme'

export const Footer = () => {
    return (
        <S.Footer>
            <Container>
                <p>Design by <span><img src={Theme.exemples[0]}/></span> <a href="#">Paco Vazquez</a> & Code by <span><img src={Theme.exemples[0]}/></span> <a href="#">Gabriel Hideki</a></p>
            </Container>
        </S.Footer>
    )
}