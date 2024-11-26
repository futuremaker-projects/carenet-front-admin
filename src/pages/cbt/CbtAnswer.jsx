import React from 'react';
import {Five, Four, One, Three, Two} from "../../assets/index.js";
import PropTypes from "prop-types";
import Cbt from "./Cbt.jsx";

const CbtAnswer = ({questionCount}) => {
    // 문제 전체 count값이 넘어와야 함
    // setter 가져와야 할듯하다. 아님 redux를 사용하는 방법
    const numbers = Array.from({ length: questionCount }, (_, index) => index);

    return (
        <div className="bg-blue-600 w-[20vw]">
            <div className="bg-emerald-600 h-[5vh] text-xl text-center leading-[3rem]">답안 표기란</div>
            <div className="flex flex-col h-[80vh] overflow-y-auto">
                {numbers.map((number, index) => (
                    <div key={index} className={'flex w-full h-[30px]'}>
                        <div className={`bg-gray-500 w-[3rem]`}></div>
                        <div className={`bg-gray-400 w-[3rem] pl-2.5`}>{index + 1}</div>
                        <div className={`bg-amber-200 flex-1`}>
                            <div className={"flex justify-between m-1"}>
                                <One className={"num"}/>
                                <Two className={"num"}/>
                                <Three className={"num"}/>
                                <Four className={"num"}/>
                                <Five className={"num"}/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CbtAnswer;


CbtAnswer.propTypes = {
    questionCount: PropTypes.number,
}