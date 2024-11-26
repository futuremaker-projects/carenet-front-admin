import React from 'react';
import {Five, Four, One, Three, Two} from "../../assets/index.js";
import PropTypes from "prop-types";
import CbtAnswer from "./CbtAnswer.jsx";

const CbtQuestion = ({questions}) => {

    return (
        <div className="bg-amber-600 flex-1 py-[5rem] px-[18rem] flex flex-col items-center justify-center">
            <div className={'h-full w-full flex items-center justify-start bg-blue-500'}>
                응급처치 구명 4단계의 순서로 옳은 것은?
            </div>
            <div className={'h-full w-full flex flex-col gap-2 bg-emerald-300'}>
                <div className={'flex items-center gap-1'}>
                    <div><One className={"num-selection"}/></div>
                    <div>쇼크예방-기도유지-지혈-상처보호</div>
                </div>
                <div className={'flex items-center gap-1'}>
                    <div><Two className={"num-selection"}/></div>
                    <div>쇼크예방-기도유지-지혈-상처보호</div>
                </div>
                <div className={'flex items-center gap-1'}>
                    <div> <Three className={"num-selection"}/></div>
                    <div>쇼크예방-기도유지-지혈-상처보호</div>
                </div>
                <div className={'flex items-center gap-1'}>
                    <div><Four className={"num-selection"}/></div>
                    <div>쇼크예방-기도유지-지혈-상처보호</div>
                </div>
                <div className={'flex items-center gap-1'}>
                    <div><Five className={"num-selection"}/></div>
                    <div>쇼크예방-기도유지-지혈-상처보호</div>
                </div>
            </div>
        </div>
    );
};

export default CbtQuestion;

CbtQuestion.propTypes = {
    questions: PropTypes.array,
}