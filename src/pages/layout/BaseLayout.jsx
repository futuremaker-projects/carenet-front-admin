import React from 'react';
import {Outlet} from "react-router-dom";
import ModalLayout from "../../components/modal/ModalLayout.jsx";
import {Toaster} from "sonner";
import Loading from "../../components/Loading.jsx";
import CbtHeader from "../cbt/CbtHeader.jsx";

const BaseLayout = () => {
    return (
        <>
            <div className="h-[100vh]">
                <CbtHeader/>
                <Outlet/>
            </div>
            <ModalLayout/>
            <Toaster position="top-right" richColors closeButton/>
            <Loading/>
        </>
    );
};

export default BaseLayout;