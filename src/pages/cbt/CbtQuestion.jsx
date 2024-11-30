import React, {useEffect, useState} from 'react';
import {
    CheckedFive,
    CheckedFour,
    CheckedOne,
    CheckedThree,
    CheckedTwo,
    Five,
    Four,
    One,
    Three,
    Two
} from "../../assets/index.js";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {setAnswer} from "../../support/redux/cbtSlice.js";

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
        const chosenQuestions = questions.slice(pageNumber, pageNumber + pageSize);
        setShownQuestions([...chosenQuestions]);
    }

    const isSingle = () => {
        return shownQuestions.length === 1;
    }

    return (
        <>
            {shownQuestions.length > 0 &&
                <div className={'flex h-[80vh] w-full'}>
                    {shownQuestions.map((question, index) => (
                        <React.Fragment key={index}>
                            <CbtQuestionSection question={question} isSingle={isSingle()}/>
                            {!isSingle() && index % 2 === 0 && <div className="divider lg:divider-horizontal py-3"></div>}
                        </React.Fragment>
                    ))}
                </div>
            }
        </>
    );
};

export default CbtQuestion;

CbtQuestion.propTypes = {
    questions: PropTypes.array,
}

const CbtQuestionSection = ({question, isSingle}) => {
    const initSelections = {1: false, 2: false, 3:false, 4:false, 5:false};
    const [selections, setSelections] = useState(initSelections);

    const answers = useSelector(state => state.cbt.answers);

    const dispatch = useDispatch();

    useEffect(() => {
        handleSetSelection();
    }, [question.id]);

    // 기존에 선택한 답이 있다면 표시해주고 아니면 모든 체크를 해제한다.
    const handleSetSelection = () => {
        if (answers[question.id]) {
            setSelections({...initSelections, [answers[question.id]]: true});
        } else {
            setSelections(initSelections);
        }
    }

    const handleGetOrder = (selectionId) => {
        switch (selectionId) {
            case 1: {
                if (selections[selectionId]) return <CheckedOne className={"num"}/>
                return <One className={"num-selection"}/>;
            }
            case 2: {
                if (selections[selectionId]) return <CheckedTwo className={"num"}/>;
                return <Two className={"num-selection"}/>;
            }
            case 3: {
                if (selections[selectionId]) return <CheckedThree className={"num"}/>;
                return <Three className={"num-selection"}/>;
            }
            case 4: {
                if (selections[selectionId]) return <CheckedFour className={"num"}/>;
                return <Four className={"num-selection"}/>;
            }
            case 5: {
                if (selections[selectionId]) return <CheckedFive className={"num"}/>;
                return <Five className={"num-selection"}/>;
            }
            default: return null;
        }
    }

    const handleCheckSelection = (selectionId) => {
        setSelections({...initSelections, [selectionId]: true});
        dispatch(setAnswer({questionId: question.id, answer: selectionId}));
    }

    const ttt = () => {
        console.log(answers);
    }

    return (
        <div className={`bg-amber-600 py-[5rem] flex flex-col items-center justify-center w-full ${isSingle ? 'flex-1 px-[18rem]' : 'px-[3rem]'}`}>
            <div className={'h-full w-full flex items-center justify-start bg-blue-500'}>
                {question.id}. {question.article}
            </div>
            <div onClick={ttt}>ttt</div>
            <div className={'h-full w-full flex flex-col gap-2 bg-emerald-300'}>
                {question.selections.map((selection, index) => (
                    <div key={index}
                         className={'flex items-center gap-1 cursor-pointer'}
                         onClick={() => handleCheckSelection(selection.selectionId)}
                    >
                        <div>{handleGetOrder(selection.selectionId, )}</div>
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