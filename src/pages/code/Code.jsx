import React from 'react';
import PropTypes from "prop-types";
import TitleCard from "../../components/cards/TitleCard.jsx";

const Code = ({title, children}) => {

    return (
        <div className={"card sw-full p-6 bg-base-100 shadow-xl mt-2"}>
            {/** Card Body */}
            <div className='h-full w-full pb-6 bg-base-100'>
                {children}
            </div>
        </div>
    );
};

export default Code;

Code.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
}