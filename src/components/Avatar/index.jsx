import React, { useState } from "react";
import { CanvasAvatar } from "./CanvasAvatar";
import { ChooseItems } from "./ChooseItems";
import * as S from "./style";
import * as T from '../../styles/GlobalStyle'

export const Avatar = () => {
    const [selectSkin, setSelectSkin] = useState(0);
    const [selectCloth, setSelectCloth] = useState(0);
    const [selectMounth, setSelectMounth] = useState(0);
    const [selectEyes, setSelectEyes] = useState(0);
    const [selectHead, setSelectHead] = useState(0);

    return (
        <T.Container>
            <h1>Avatar Maker</h1>
            <p>Custom build your own illustrated avatar.</p>
            <S.WrapperAvatar>
                <CanvasAvatar
                    skin={selectSkin}
                    cloth={selectCloth}
                    mounth={selectMounth}
                    eyes={selectEyes}
                    head={selectHead}
                    />
                <div className="wrapChooseItems">
                    <h2>Let's create!</h2>
                    <ChooseItems title="Skin" type="skins" selectItem={setSelectSkin}/>
                    <ChooseItems title="Clothes" type="clothes" selectItem={setSelectCloth}/>
                    <ChooseItems title="Mounth" type="mounth" selectItem={setSelectMounth}/>
                    <ChooseItems title="Eyes" type="eyes" selectItem={setSelectEyes}/>
                    <ChooseItems title="Heade" type="head" selectItem={setSelectHead}/>
                </div>
            </S.WrapperAvatar>
            <p>Design: Paco Vazquez</p>
            <p>Code: Gabriel Hideki</p>
        </T.Container>
    )
}