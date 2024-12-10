import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {resetAnswers, showCbtModes} from "../../support/redux/cbtSlice.js";
import {submitCbtResult} from "../../service/cbtService.js";

const CbtAwait = () => {
    const answers = useSelector(state => state.cbt.answers);

    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // 글자크기, 화면보기 기능 숨김
        dispatch(showCbtModes(false));
    }, []);

    const handleSubmitAnswers = async () => {
        const cbtAnswers = [];
        Object.keys(answers).forEach(questionId => {
            const data = {questionId: questionId, answer: answers[questionId]};
            cbtAnswers.push(data);
        });
        const data = {
            examId: params.id,
            answers: cbtAnswers
        }
        await submitCbtResult(data, () => {
            // params.id 없으면?
            navigate(`/cbt/exams/${parseInt(params.id)}/evaluation`);
            dispatch(resetAnswers());
        });
    }

    const handleMoveCbtQuestion = () => {
        navigate(`/cbt/exams/${params.id}/questions`);
    }

    return (
        <div className={'w-full flex justify-center'}>
            <div className={'mt-10 w-[35rem] flex flex-col items-center pt-10 rounded-lg bg-amber-100'}>
                <div className={'font-bold text-[2.2rem]'}>교시 종료 대기</div>
                <div className={'flex flex-col items-center gap-3 mt-4'}>
                    <div className={'text-[2rem]'}>수고하셨습니다.</div>
                    <div className={'text-[1.8rem]'}>남은시간 동안 풀이를 다시 할 수 있습니다.</div>
                    <div className={'text-[1.5rem] text-red-500'}>시험 종료시 시험결과와 해답을 보실수 있습니다.</div>
                </div>
                <div className={'my-5'}>
                    <button className={'btn mr-4'} onClick={handleMoveCbtQuestion}>문제 페이지로 이동</button>
                    <button className={'btn btn-secondary'} onClick={handleSubmitAnswers}>채점하기</button>
                </div>
            </div>
        </div>
    );
};

export default CbtAwait;