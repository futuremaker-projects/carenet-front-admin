import React from 'react';
import PrimeCodeInput from "./CodeInput.jsx";
import CodeList from "./CodeList.jsx";

const Code = () => {

    return (
        <div className={"sw-full h-full p-6 bg-base-100 shadow-xl"}>
            <div className={"h-full flex gap-4"}>
                <div className={"w-[20rem] border border-black h-full"}>
                    <PrimeCodeInput />
                    <CodeList />
                </div>
                <div className={"flex-1 border border-black"}></div>
            </div>
        </div>
    );
};

export default Code;

// Code.propTypes = {
//     title: PropTypes.string,
//     children: PropTypes.element,
// }