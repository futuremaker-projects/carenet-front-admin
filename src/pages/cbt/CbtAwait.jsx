import React from 'react';

const CbtAwait = () => {
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
                    <button className={'btn mr-4'}>시험 보러가기</button>
                    <button className={'btn btn-secondary'}>채점하기</button>
                </div>
            </div>
        </div>
    );
};

export default CbtAwait;