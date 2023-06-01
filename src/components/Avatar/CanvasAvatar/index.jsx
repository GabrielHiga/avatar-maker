import React, { useState } from "react";
import { SelectedItem } from "./SelectedItem";
import * as S from "./style";
import { Theme } from '../../../styles/Theme'
import 'canvas-toBlob';
import { Button } from "../../../styles/GlobalStyle";

export const CanvasAvatar = ({
    skin,
    cloth,
    mounth,
    eyes,
    head,
}) => {
    const [colorBackground, setColorBackground] = useState('#fff');

    const handleColorChange = (e) => {
        setColorBackground(e.target.value);
    }

    return (
        <S.Wrapper>
            <S.WrapImage color={colorBackground} id="generatedImage">
                <SelectedItem
                    itemSelected={Theme.items.clothes[cloth].item}
                    />
                <SelectedItem
                    itemSelected={Theme.items.skins[skin].item}
                    />
                <SelectedItem
                    itemSelected={Theme.items.mounth[mounth].item}
                    />
                <SelectedItem
                    itemSelected={Theme.items.eyes[eyes].item}
                    />
                <SelectedItem
                    itemSelected={Theme.items.head[head].item}
                    />
            </S.WrapImage>
            <div className="wrapChangeColor">
                <label htmlFor="color">🎨 You can change background-color:</label>
                <input type="color" name="color" value={colorBackground} onChange={handleColorChange}/>
            </div>
        </S.Wrapper>
    )
}