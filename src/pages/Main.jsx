import React from 'react';
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <>
            <div className={'text-9xl text-blue-500'}>
                main
            </div>
            <Link to={'/exams'}>
                모의고사
            </Link>
        </>

    );
};

export default Main;