import Input from "./input";
import {useState} from "react";

const AutoComplete = ({id, name, options, handleNew, ...rest}) => {
    const [val, setVal] = useState('');
    const [displayList, setDisplayList] = useState(false);
    const [selected, setSelected] = useState('');
    const onFocus = () => setDisplayList(true);
    const onBlur = () => setTimeout(() => setDisplayList(false), 200);
    const handleChange = (e) => {
        setVal(e.target.value.trim());
    };


    const filtered = options.filter(el => {
        return el.name.toLowerCase().includes(val.trim().toLowerCase());
    });
    const handleNewItem = (ev) => {
        ev.preventDefault();
        handleNew(val);
    };
    const handleOptionClick = (ev, id, value) => {
        ev.preventDefault();
        setSelected(id);
        setVal(value);

    };
    return <div className='relative'>
        {val !== '' && <button type='button' className='absolute text-gray-500 right-0 top-0 p-2' onClick={() => {setVal(''); setSelected('');}}><i className='fa fa-times'></i></button>}
        <Input id={id} onChange={handleChange} value={val} onFocus={onFocus} onBlur={onBlur} {...rest} />
        <Input type='hidden' name={name} value={selected} />
        {displayList && <ul className='shadow-md bg-white rounded text-sm absolute w-full'>
            {filtered.length === 0 && val !== '' ? <li className='border-b p-3 '><button type='button' onClick={handleNewItem}>{`Create '${val}' as a new unit`}</button></li> : <li className='font-bold border-b p-3 '>Select a unit or start typing a new one</li>}
            {filtered.map((option) => {
                return <li key={option._id} value={option._id} className='border-b p-3 '><button type='button' className='w-full text-left' onClick={e => handleOptionClick(e, option._id, option.name)}>{option.name}</button></li>;
            })}
        </ul>}
    </div>;
};

export default AutoComplete;