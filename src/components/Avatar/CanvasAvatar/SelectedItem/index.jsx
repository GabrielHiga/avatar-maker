import React from "react";

export const SelectedItem = ({
    itemSelected
}) => {
    return (
        itemSelected && <img src={ itemSelected }/>
    )
}