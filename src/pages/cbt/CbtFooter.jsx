import React from 'react';
import {useDispatch} from "react-redux";
import {setPageNumber} from "../../support/redux/cbtSlice.js";

const CbtFooter = () => {
    const dispatch = useDispatch();

    const handleChangePageNext = () => {
        dispatch(setPageNumber(1))
    }
    const handleChangePagePrev = () => {
        dispatch(setPageNumber(-1))
    }

    return (
        <div className={"bg-blue-300 h-[10vh]"}>
            <div className={'flex justify-center gap-2 pt-2'}>
                <button className="btn btn-outline" onClick={handleChangePagePrev}>이전</button>
                <button className="btn btn-outline" onClick={handleChangePageNext}>다음</button>
            </div>
        </div>
    );
};

export default CbtFooter;