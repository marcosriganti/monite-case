import React from 'react';

const Button = ({children, onClick, variant, type = 'button', ...rest}) => {
    const handleClick = (ev) => {
        if (onClick) {
            onClick(ev);
        }
    };
    let style = '';
    switch (variant) {
        case 'primary':
            style = 'px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 text-sm';
            break;
        case 'secondary':
            style = 'text-sm bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200';
            break;
        default:
            style = 'px-4 text-sm py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300';
            break;
    }

    return (
        <button onClick={handleClick} type={type} className={style} {...rest}>
            {children}
        </button>
    );
};
export default Button;