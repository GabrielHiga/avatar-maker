import React from "react";
import { Button, Container } from "../../styles/GlobalStyle";
import * as S from './style'
import { Theme } from '../../styles/Theme'

export const Footer = () => {
    return (
        <S.Footer>
            <Container>
                {/* <div className="wrapButtons">
                    <Button>Github repository</Button>
                    <Button>File (figma)</Button>
                </div> */}
                <div className="wrapCreators">
                    <p>Design by <a target="_blank" href="https://www.pacovqzz.com/">Paco Vazquez</a></p>
                    <p>Code by <a target="_blank" href="#">Gabriel Hideki</a></p>
                </div>
            </Container>
        </S.Footer>
    )
}