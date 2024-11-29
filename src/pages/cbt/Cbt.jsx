import React, {useEffect, useState} from 'react';
import CbtAnswer from "./CbtAnswer.jsx";
import CbtHeader from "./CbtHeader.jsx";
import CbtQuestion from "./CbtQuestion.jsx";
import PropTypes from "prop-types";
import {getQuestions} from "../../service/cbtService.js";
import CbtFooter from "./CbtFooter.jsx";

const Cbt = ({examId}) => {
    const [questions, setQuestions] = useState([])
    const [questionCount, setQuestionCount] = useState(0);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        handleCallData();
    }, []);

    const handleCallData = async () => {
        const data = await getQuestions(21);
        setQuestions([...data]);
        setQuestionCount(data.length);
    }

    // 선택된 문제의 id or index를 가져오면 될듯?
    const handleShowQuestions = (selectedId) => {

    }

    return (
        <div className="h-[100vh]">
            <CbtHeader />
            <div className="flex h-[80vh]">
                {/* 특정 문제가 여기에 객체로 들어가야 할거 같다. - 2단 보기시에는 어떻게 구성해야 할까? */}
                {questions.length > 0 && <CbtQuestion questions={questions}/>}
                {/* 현재 어떤 문제에 답을 체크하고 있는지 어떻게 확인? - 특정 인텍스를 보내면  */}
                <CbtAnswer questionCount={questionCount}/>
            </div>
            <CbtFooter />
        </div>
    );
};

export default Cbt;

Cbt.propTypes = {
    examId: PropTypes.number,
}