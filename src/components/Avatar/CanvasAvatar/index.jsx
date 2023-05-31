import React, { useState } from "react";
import { SelectedItem } from "./SelectedItem";
import * as S from "./style";
import { Theme } from '../../../styles/Theme'
import html2canvas from "html2canvas";
import { saveAs } from 'file-saver';
import 'canvas-toBlob';

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

    const captureDivAsImage = () => {
        const element = document.getElementById('generatedImage');
      
        html2canvas(element).then((canvas) => {
            canvas.toBlob((blob) => {
              saveAs(blob, 'my_avatar.png');
            });
        });
    };

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
            <input type="color" name="color" value={colorBackground} onChange={handleColorChange}/>
            <label htmlFor="color">Change background color</label>
            <button onClick={captureDivAsImage}>Download Avatar (.jpg)</button>
        </S.Wrapper>
    )
}