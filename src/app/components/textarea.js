import React from "react";
import Label from "./label";

const FormTextarea = ({label, id, placeholder, ...props}) => {
    return <>
        <Label id={id}> {label} </Label>
        <textarea id={id} placeholder={placeholder} className="block w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500" {...props}></textarea>
    </>;
};

export default FormTextarea;