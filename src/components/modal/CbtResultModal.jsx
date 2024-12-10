import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../support/redux/modalSlice.js";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

const CbtResultModal = ({data}) => {
    const answers = useSelector(state => state.cbt.answers);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGetUnsolvedCount = () => {
        // 105개라는걸 code에서 불러와야 함
        return 105 - Object.keys(answers).length;
    }

    const close = () => dispatch(closeModal());

    const handleMoveSteadyPage = () => {
        close();
        navigate(`/cbt/exams/${data}/await`);
    }

    return (
        <div className={'flex flex-col'}>
            <div>풀지않은 문제({handleGetUnsolvedCount()}개)가 있습니다.</div>
            <div>답안을 제출하시겠습니까?</div>
            <div className={'modal-action'}>
                <button type="button" className={'btn btn-outline btn-primary'} onClick={handleMoveSteadyPage}>제출</button>
                <button type="button" className={'btn'} onClick={() => close()}>취소</button>
            </div>
        </div>
    );
};

export default CbtResultModal;

CbtResultModal.propTypes = {
    data: PropTypes.object,
}