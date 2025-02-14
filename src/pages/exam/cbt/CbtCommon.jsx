import {
    CheckedFive,
    CheckedFour,
    CheckedOne,
    CheckedThree,
    CheckedTwo, Five,
    Four,
    One,
    Three,
    Two
} from "../../../assets/index.js";
import React from "react";

export const handleGetOrder = (selections, selectionId) => {
    switch (selectionId) {
        case 1: {
            if (selections[selectionId]) return <CheckedOne className={"num"}/>
            return <One className={"num"}/>;
        }
        case 2: {
            if (selections[selectionId]) return <CheckedTwo className={"num"}/>;
            return <Two className={"num"}/>;
        }
        case 3: {
            if (selections[selectionId]) return <CheckedThree className={"num"}/>;
            return <Three className={"num"}/>;
        }
        case 4: {
            if (selections[selectionId]) return <CheckedFour className={"num"}/>;
            return <Four className={"num"}/>;
        }
        case 5: {
            if (selections[selectionId]) return <CheckedFive className={"num"}/>;
            return <Five className={"num"}/>;
        }
        default: return null;
    }
}