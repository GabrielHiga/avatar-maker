import React, { useState, useEffect } from "react";
import { Theme } from '../../../styles/Theme'
import * as S from "./style";
import { Carousel } from '@trendyol-js/react-carousel';

export const ChooseItems = ({
    title,
    type,
    selectItem,
}) => {    
    const handleItem = (item) => {
        selectItem(item.id);
        // console.log(item.id)
    }

    return (
        <>
            <S.WrapOptions>
                <p>{title}</p>
                <Carousel show={4} slide={2} transition={0.5}>
                    {Object.values(Theme.items[type]).map((item) => (
                        <button onClick={() => handleItem(item)} key={item.id}><img src={item.item}/></button>
                    ))}
                </Carousel>
            </S.WrapOptions>
        </>
    )
}