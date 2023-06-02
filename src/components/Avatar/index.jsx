import React, { useState } from "react";
import { CanvasAvatar } from "./CanvasAvatar";
import { ChooseItems } from "./ChooseItems";
import * as S from "./style";
import * as T from '../../styles/GlobalStyle'
import { Button } from "../../styles/GlobalStyle";
import html2canvas from "html2canvas";
import { saveAs } from 'file-saver';
import { Theme } from "../../styles/Theme";
import { motion } from "framer-motion";
import { Footer } from "../Footer";

export const Avatar = () => {
    const [selectSkin, setSelectSkin] = useState(0);
    const [selectCloth, setSelectCloth] = useState(0);
    const [selectMounth, setSelectMounth] = useState(0);
    const [selectEyes, setSelectEyes] = useState(0);
    const [selectHead, setSelectHead] = useState(0);

    const captureDivAsImage = () => {
        const element = document.getElementById('generatedImage');
      
        html2canvas(element).then((canvas) => {
            canvas.toBlob((blob) => {
              saveAs(blob, 'my_avatar.png');
            });
        });
    };

    return (
        <>
        <T.Container>
            <S.WrapTitle>
                <motion.h1 initial={{ y: 75, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25, duration: 0.5, ease: "easeOut", }}>Avatar Maker</motion.h1>
                <motion.p initial={{ y: 75, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}>Custom build your own illustrated avatar.</motion.p>
                    <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }} className="itemGraphism graphism_01"><img src={Theme.exemples[0]}/></motion.div>
                    <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.55, duration: 0.50, ease: "easeOut" }} className="itemGraphism graphism_02"><img src={Theme.exemples[1]}/></motion.div>
                    <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.55, duration: 0.50, ease: "easeOut" }} className="itemGraphism graphism_03"><img src={Theme.exemples[2]}/></motion.div>
                    <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }} className="itemGraphism graphism_04"><img src={Theme.exemples[3]}/></motion.div>
            </S.WrapTitle>
            <motion.div
            initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.90, duration: 0.75, ease: "easeOut" }}
            >
                <S.WrapperAvatar>
                    <CanvasAvatar
                        skin={selectSkin}
                        cloth={selectCloth}
                        mounth={selectMounth}
                        eyes={selectEyes}
                        head={selectHead}
                        />
                    <div className="wrapChooseItems">
                        <ChooseItems title="Skin" type="skins" selectItem={setSelectSkin}/>
                        <ChooseItems title="Clothes" type="clothes" selectItem={setSelectCloth}/>
                        <ChooseItems title="Mounth" type="mounth" selectItem={setSelectMounth}/>
                        <ChooseItems title="Eyes" type="eyes" selectItem={setSelectEyes}/>
                        <ChooseItems title="Heade" type="head" selectItem={setSelectHead}/>
                        <Button className="downloadButton" onClick={captureDivAsImage}>Download avatar (.png)</Button>
                    </div>
                </S.WrapperAvatar>
            </motion.div>
        </T.Container>
        <Footer/>
        </>
    )
}