
import React, {useState, useEffect} from 'react';
import Input from '@/components/input';
import Label from '@/components/label';
import Button from '@/components/button';
import Checkbox from '@/components/checkbox';
import Dropdown from '@/components/dropdown';
import FormInput from '@/components/form-input';

const UNITS_API = '/api/units';

const vats = [
    {value: 16, label: '16%'},
    {value: 18, label: '18%'},
    {value: 21, label: '21%'},
    {value: 25, label: '25%'}
];


const FormTextarea = ({label, id, placeholder, ...props}) => {
    return <>
        <Label id={id}> {label} </Label>
        <textarea id={id} placeholder={placeholder} className="block w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500" {...props}></textarea>
    </>;
};

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
        <Input id={id} onChange={handleChange} value={val} onFocus={onFocus} onBlur={onBlur} />
        <Input type='hidden' name={name} value={selected} />
        {displayList && <ul className='shadow-md bg-white rounded text-sm absolute w-full'>
            {filtered.length === 0 && val !== '' ? <li className='border-b p-3 '><button type='button' onClick={handleNewItem}>{`Create '${val}' as a new unit`}</button></li> : <li className='font-bold border-b p-3 '>Select a unit or start typing a new one</li>}
            {filtered.map((option) => {
                return <li key={option._id} value={option._id} className='border-b p-3 '><button type='button' className='w-full text-left' onClick={e => handleOptionClick(e, option._id, option.name)}>{option.name}</button></li>;
            })}
        </ul>}
    </div>;
};

const ProductForm = ({onSubmit, onClose}) => {
    // Fetch the available units from the API
    const [units, setUnits] = useState([]);
    const [loadingUnits, setLoadingUnits] = useState(false);
    const fetchData = () => {
        fetch(UNITS_API)
            .then((res) => res.json())
            .then((data) => {
                setUnits(data);
                setLoadingUnits(false);
            });
    };

    const handleNewUnit = (unit) => {
        setLoadingUnits(true);
        fetch(UNITS_API, {
            method: 'POST',
            body: JSON.stringify({name: unit}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
            .then((data) => {
                setUnits([...units, data]);
            });
    };
    useEffect(() => {
        if (!loadingUnits) {
            fetchData();
        }
    }, [loadingUnits]);

    const handleClose = () => {
        if (onClose)
            onClose();
    };
    return (<>
        <form className="space-y-4" onSubmit={onSubmit}>
            <div className="flex items-center gap-4 mb-6">

                <label className="flex items-center gap-2">
                    <Checkbox type="radio" name="type" value={'product'} />
                    <span className="text-gray-700">Product</span>
                </label>

                <label className="flex items-center gap-2">
                    <Checkbox type="radio" name="type" value={'service'} />
                    <span className="text-gray-700">Service</span>
                </label>
            </div>
            <div>
                <FormInput label="Product Name" id="name" name="name" placeholder="Enter Product name" />
            </div>
            <div>
                <FormTextarea label="Description" id="description" name="description" placeholder="Enter description" rows="2" />
            </div>
            <div>
                <Label id={'unit'}>Units</Label>
                <AutoComplete id="unit" name="unit" options={units} handleNew={handleNewUnit} />
            </div>
            <div>
                <FormInput label="Unit price(net)" id="price" name="price" type='number' placeholder="€ 0.00" />
            </div>
            <div>
                <Label id={'vat'}> VAT </Label>
                <Dropdown id="vat" name="vat" options={vats} />
            </div>
            <div className="flex justify-between items-center mt-6">
                <Button variant={'tertiary'} type="reset" onClick={handleClose}>Cancel</Button>
                <Button variant={'primary'} type="submit">Add</Button>
            </div>
        </form>
    </>);
};
export default ProductForm;