import React from 'react';
import {useDispatch} from "react-redux";
import {setNextPage, setPrevPage} from "../../../support/redux/cbtSlice.js";

const CbtFooter = () => {
    const dispatch = useDispatch();

    const handleChangePageNext = () => {
        dispatch(setNextPage(1))
    }
    const handleChangePagePrev = () => {
        dispatch(setPrevPage(1))
    }

    return (
        <div className={"bg-blue-300 h-[8vh]"}>
            <div className={'flex justify-center gap-2 pt-4'}>
                <button className="btn btn-outline" onClick={handleChangePagePrev}>이전</button>
                <button className="btn btn-outline" onClick={handleChangePageNext}>다음</button>
            </div>
        </div>
    );
};

export default CbtFooter;