import React from 'react';
import {Clock, DoubleView, SingleView} from "../../assets/index.js";
import CountDown from "./CountDown.jsx";
import {Shifter, TextShifter} from "./styled/cbt.jsx";
import {useDispatch} from "react-redux";
import {setPageSize} from "../../support/redux/cbtSlice.js";

const CbtHeader = () => {
    const dispatch = useDispatch();

    const handleChangeViewMode = (pageSize) => {
        dispatch(setPageSize(pageSize));
    }

    return (
        <div className="bg-fuchsia-600 h-[10vh] flex">
            <div className={'bg-white w-[20vw] h-full flex flex-col items-center'}>
                <div>학번</div>
                <div>이름</div>
            </div>
            <div className={'bg-amber-200 w-[25vw] h-full text-center flex items-center justify-center cbt-title'}>
                모의고사명
            </div>
            <div className={'bg-amber-300 w-[35vw] h-full flex'}>
                <div className={'w-full flex justify-center m-3'}>
                    <Shifter className={'bg-blue-300'}>
                        <div>글자</div>
                        <div>크기</div>
                    </Shifter>
                    <TextShifter className={'bg-blue-400'}>
                        <div className={'text-[0.8rem]'}>가</div>
                        <div>80%</div>
                    </TextShifter>
                    <TextShifter className={'bg-blue-500'}>
                        <div>가</div>
                        <div>100%</div>
                    </TextShifter>
                    <TextShifter className={'bg-blue-600'}>
                        <div className={'text-[1.2rem]'}>가</div>
                        <div>120%</div>
                    </TextShifter>
                </div>
                <div className={'w-full flex justify-center m-3'}>
                    <Shifter className={'bg-emerald-300'}>
                        <div>화면</div>
                        <div>보기</div>
                    </Shifter>
                    <Shifter className={'bg-emerald-300 cursor-pointer'} onClick={() => handleChangeViewMode(1)}>
                        <div><SingleView className={'w-9 h-9'}/></div>
                        <div>1단 보기</div>
                    </Shifter>
                    <Shifter className={'bg-emerald-600 cursor-pointer'} onClick={() => handleChangeViewMode(2)}>
                        <div><DoubleView className={'w-9 h-9'}/></div>
                        <div>2단 보기</div>
                    </Shifter>
                </div>
            </div>
            <div className={'bg-amber-500 w-[20vw] h-full flex align-center gap-4'}>
                <Clock className={'w-14 h-full'}/>
                <div className={'flex flex-col justify-center h-full'}>
                    <div>제한시간: 105분</div>
                    <div className={'flex'}>남은시간:
                        <CountDown/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CbtHeader;