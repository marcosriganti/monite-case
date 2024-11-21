"use client";

import React, {useState, useEffect, useContext} from 'react';
import Label from '@/components/label';
import Button from '@/components/button';
import Checkbox from '@/components/checkbox';
import Dropdown from '@/components/dropdown';
import FormInput from '@/components/form-input';
import FormTextarea from '@/components/textarea';
import AutoComplete from '@/components/autocomplete';

import {NotificationContext} from 'notification-provider';
const UNITS_API = '/api/units';

const vats = [
    {value: 16, label: '16%'},
    {value: 18, label: '18%'},
    {value: 21, label: '21%'},
    {value: 25, label: '25%'}
];




const ProductForm = ({onSubmit, onClose}) => {
    // Fetch the available units from the API
    const [units, setUnits] = useState([]);
    const [loadingUnits, setLoadingUnits] = useState(false);
    const {setNotification, clear} = useContext(NotificationContext);

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
                setNotification(`The '${unit}' was added as a new measuring unit`, 'success');
                setTimeout(clear, 3000);
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
                <FormInput label="Product Name" id="name" name="name" placeholder="Enter Product name" required />
            </div>
            <div>
                <FormTextarea label="Description" id="description" name="description" placeholder="Enter description" rows="2" />
            </div>
            <div>
                <Label id={'unit'}>Units</Label>
                <AutoComplete id="unit" name="unit" options={units} handleNew={handleNewUnit} />
            </div>
            <div>
                <FormInput label="Unit price(net)" id="price" name="price" type='number' placeholder="€ 0.00" required />
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