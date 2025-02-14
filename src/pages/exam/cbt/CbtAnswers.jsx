import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {setAnswer} from "../../../support/redux/cbtSlice.js";
import {handleGetOrder} from "./CbtCommon.jsx";
import {ArrowUpOnSquareIcon} from "@heroicons/react/24/outline/index.js";
import {openModal} from "../../../support/redux/modalSlice.js";
import {MODAL_TYPES} from "../../../support/constants/constans.js";
import {useParams} from "react-router-dom";

const CbtAnswers = ({questions}) => {
    const dispatch = useDispatch();
    const params= useParams();

    const handleSubmitResult = () => {
        dispatch(openModal({title: "알림", bodyType: MODAL_TYPES.CBT_RESULT, size: 'w-[23rem]', data: params.id}))
    }

    return (
        <div className="bg-blue-600 w-[15vw]">
            <div className="bg-emerald-600 h-[5vh] text-xl text-center leading-[3rem]">답안 표기란</div>
            <div className="flex flex-col h-[77vh] overflow-y-auto">
                {questions.map((question, index) => (
                    <React.Fragment key={index}>
                        <div className={'flex w-full h-[30px] mb-0.5 items-center'}>
                            <div className={`bg-gray-500 min-w-[3rem]`}></div>
                            <div className={`bg-gray-400 min-w-[3rem] pl-2.5`}>{index + 1}</div>
                            <CbtAnswer question={question}/>
                        </div>
                        {(index + 1) % 5 === 0 && (index + 1) !== questions.length &&
                            <div className={'my-2 border-t border-gray-300 border-dotted'}></div>
                        }
                    </React.Fragment>
                ))}
            </div>
            <div className={'h-[8vh] bg-emerald-300 flex justify-center pt-2 px-2'}>
                <button type={'button'} className="btn w-[10rem] text-[18px]" onClick={handleSubmitResult}>
                <ArrowUpOnSquareIcon className="w-6 h-6" />
                    답안제출
                </button>
            </div>
        </div>
    );
};

export default CbtAnswers;

CbtAnswers.propTypes = {
    questions: PropTypes.array,
}

const CbtAnswer = ({question}) => {
    const initSelections = {1: false, 2: false, 3:false, 4:false, 5:false};
    const [selections, setSelections] = useState(initSelections);

    const answers = useSelector(state => state.cbt.answers);

    const dispatch = useDispatch();

    useEffect(() => {
        handleSetSelection();
    }, [answers]);

    const handleSetSelection = () => {
        if (answers[question.id]) {
            setSelections({...initSelections, [answers[question.id]]: true});
        } else {
            setSelections(initSelections);
        }
    }

    const handleCheckSelection = (selectionId) => {
        setSelections({...initSelections, [selectionId]: true});
        dispatch(setAnswer({questionId: question.id, answer: selectionId}));
    }

    return (
        <div className={`bg-amber-200 flex-1`}>
            <div className={"flex justify-center m-1"}>
                {question.selections.map((selection, index) => (
                    <div key={index}
                         className={'cursor-pointer'}
                         onClick={() => handleCheckSelection(selection.selectionId)}>
                        {handleGetOrder(selections, selection.selectionId)}
                    </div>
                ))}
            </div>
        </div>
    )
}

CbtAnswer.propTypes = {
    question: PropTypes.object,
}