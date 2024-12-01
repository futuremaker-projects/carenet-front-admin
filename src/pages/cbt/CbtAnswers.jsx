import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {setAnswer} from "../../support/redux/cbtSlice.js";
import {handleGetOrder} from "./CbtCommon.jsx";

const CbtAnswers = ({questions}) => {
    return (
        <div className="bg-blue-600 w-[15vw]">
            <div className="bg-emerald-600 h-[5vh] text-xl text-center leading-[3rem]">답안 표기란</div>
            <div className="flex flex-col h-[80vh] overflow-y-auto">
                {questions.map((question, index) => (
                    <div key={index} className={'flex w-full h-[30px]'}>
                        <div className={`bg-gray-500 min-w-[3rem]`}>s</div>
                        <div className={`bg-gray-400 min-w-[4rem] pl-2.5`}>{index + 1}</div>
                        <CbtAnswer question={question} />
                    </div>
                ))}
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
            <div className={"flex justify-start m-1"}>
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