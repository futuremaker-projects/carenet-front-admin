import React from 'react';
import {closeModal} from "../../support/redux/modalSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {MODAL_TYPES} from "../../support/constants/constans.js";
import ExamCreateModal from "./ExamCreateModal.jsx";
import QuestionCreateModal from "./QuestionCreateModal.jsx";
import CbtResultModal from "./CbtResultModal.jsx";

const ModalLayout = () => {
    const {isOpen, bodyType, size, data, title} = useSelector(state => state.modal)
    const dispatch = useDispatch()

    const close = () => {
        dispatch(closeModal())
    }

    return(
        <>
            <div className={`modal ${isOpen ? "modal-open" : ""}`}>
                <div className={`modal-box ${size}`}>
                    <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => close()}>✕</button>
                    <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>
                    {
                        {
                            [MODAL_TYPES.EXAM_CREATE]: <ExamCreateModal data={data}/>,
                            [MODAL_TYPES.QUESTION_CREATE]: <QuestionCreateModal data={data}/>,
                            [MODAL_TYPES.CBT_RESULT]: <CbtResultModal data={data}/>,
                            [MODAL_TYPES.DEFAULT]: <div></div>
                        }[bodyType]
                    }
                </div>
            </div>
        </>
    )
};

export default ModalLayout;