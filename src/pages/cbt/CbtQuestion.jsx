import React, {useEffect, useState} from 'react';
import {Five, Four, One, Three, Two} from "../../assets/index.js";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";

const CbtQuestion = ({questions}) => {
    const [shownQuestions, setShownQuestions] = useState([]);

    const pageNumber = useSelector(state => state.cbt.pageNumber);
    const pageSize = useSelector(state => state.cbt.pageSize);

    const dispatch = useDispatch();

    useEffect(() => {
        handleSetShowQuestion();
    }, [pageNumber, pageSize]);

    const handleSetShowQuestion = () => {
        // 2단 보기시 page + 1 부분의 1 변경해야 함
        const chosenQuestions = questions.slice(pageNumber, pageNumber + pageSize)
        setShownQuestions([...chosenQuestions])
    }

    const isSingle = () => {
        return shownQuestions.length === 1;
    }

    return (
        <>
            {shownQuestions.length > 0 &&
                <>
                    {shownQuestions.map((question, index) => (
                        <React.Fragment key={index}>
                            <CbtQuestionSection question={question} isSingle={isSingle()}/>
                            {!isSingle() && index % 2 === 0 && <div className="divider lg:divider-horizontal py-3"></div>}
                        </React.Fragment>
                    ))}
                </>
            }
        </>
    );
};

export default CbtQuestion;

CbtQuestion.propTypes = {
    questions: PropTypes.array,
}

const CbtQuestionSection = ({question, isSingle}) => {
    console.log(isSingle)

    const handleGetOrder = (selectionId) => {
        switch (selectionId) {
            case 1: return <One className={"num-selection"}/>;
            case 2: return <Two className={"num-selection"}/>;
            case 3: return <Three className={"num-selection"}/>;
            case 4: return <Four className={"num-selection"}/>;
            case 5: return <Five className={"num-selection"}/>;
            default: return null;
        }
    }

    return (
        <div className={`bg-amber-600 py-[5rem] flex flex-col items-center justify-center ${isSingle ? 'flex-1 px-[18rem]' : 'w-[40vw] px-[3rem]'}`}>
            <div className={'h-full w-full flex items-center justify-start bg-blue-500'}>
                {question.article}
            </div>
            <div className={'h-full w-full flex flex-col gap-2 bg-emerald-300'}>
                {question.selections.map((selection, index) => (
                    <div key={index} className={'flex items-center gap-1'}>
                        <div>{handleGetOrder(selection.selectionId)}</div>
                        <div>{selection.content}</div>
                    </div>
                ))}
            </div>
        </div>

    )
}

CbtQuestionSection.propTypes = {
    question: PropTypes.object,
    isSingle: PropTypes.bool,
}