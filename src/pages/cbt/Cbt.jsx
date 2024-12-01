import React, {useEffect, useState} from 'react';
import CbtAnswers from "./CbtAnswers.jsx";
import CbtHeader from "./CbtHeader.jsx";
import CbtQuestion from "./CbtQuestion.jsx";
import PropTypes from "prop-types";
import {getQuestions} from "../../service/cbtService.js";
import CbtFooter from "./CbtFooter.jsx";
import {useDispatch} from "react-redux";
import {setTotalPages} from "../../support/redux/cbtSlice.js";

const Cbt = ({examId = 21}) => {
    const [questions, setQuestions] = useState([])
    const [questionCount, setQuestionCount] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        handleCallData();
    }, []);

    const handleCallData = async () => {
        await getQuestions(examId, (data) => {
            setQuestions([...data]);
            setQuestionCount(data.length);
            dispatch(setTotalPages(data.length));
        });
    }

    return (
        <div className="h-[100vh]">
            <CbtHeader />
            <div className="flex h-[90vh]">
                <div className={'flex flex-col w-[85vw]'}>
                    {questions.length > 0 && <CbtQuestion questions={questions}/>}
                    <CbtFooter />
                </div>
                <CbtAnswers questions={questions}/>
            </div>
        </div>
    );
};

export default Cbt;

Cbt.propTypes = {
    examId: PropTypes.number,
}