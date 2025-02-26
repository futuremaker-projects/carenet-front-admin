import React, {useState} from 'react';
import {createPrimeCode} from "../../../service/admin/CodeService.js";
import {toast} from "sonner";
import {useTranslation} from "react-i18next";

const CodeInput = () => {
    const [value, setValue] = useState("");
    const {t} = useTranslation();

    const handleSavePrimeCode = (e) => {
        if (e.key === 'Enter') {
            console.log(value);
            createPrimeCode({name: value, parentId: null} ,() => {
                setValue("");
                // refresh 필요
                toast.success(t(`saved`));
            })
        }
    }

    return (
        <div className={"m-2"}>
            <input
                type="text"
                placeholder="코드를 생성하세요."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleSavePrimeCode}
                className="input input-bordered input-sm w-full max-w-xs"/>
        </div>
    );
};

export default CodeInput;