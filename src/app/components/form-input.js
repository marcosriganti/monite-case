import React from 'react';
import Label from '@/components/label';
import Input from '@/components/input';

const FormInput = ({label, id, name, placeholder, type = 'text', ...props}) => {
    return (<>
        <Label id={id}> {label}</Label >
        <Input type={type} id={id} placeholder={placeholder || ''} name={name}
        />
    </>);
};
export default FormInput;