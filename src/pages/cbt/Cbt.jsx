import React, {useEffect, useState} from 'react';
import CbtAnswers from "./CbtAnswers.jsx";
import CbtHeader from "./CbtHeader.jsx";
import CbtQuestion from "./CbtQuestion.jsx";
import PropTypes from "prop-types";
import {getQuestions} from "../../service/cbtService.js";
import CbtFooter from "./CbtFooter.jsx";
import {useDispatch} from "react-redux";
import {setTotalPages, showCbtModes} from "../../support/redux/cbtSlice.js";
import {useParams} from "react-router-dom";

const Cbt = () => {
    const [questions, setQuestions] = useState([]);

    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        handleCallData();
        dispatch(showCbtModes(true));
    }, []);

    const handleCallData = async () => {
        await getQuestions(params.id, (data) => {
            setQuestions([...data]);
            dispatch(setTotalPages(data.length));
        });
    }

    return (
        <div className="flex h-[90vh]">
            <div className={'flex flex-col w-[85vw]'}>
                {questions.length > 0 && <CbtQuestion questions={questions}/>}
                <CbtFooter />
            </div>
            <CbtAnswers questions={questions}/>
        </div>
    );
};

export default Cbt;

Cbt.propTypes = {
    examId: PropTypes.number,
}