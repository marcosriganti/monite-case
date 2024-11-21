"use client";
import React, {useState, useEffect, useContext} from "react";
import Button from "@/components/button";
import Header from "@/components/header";
import Table from "@/components/table";
import Modal from "@/components/modal";
import ProductForm from "@/components/forms/product";
import Image from 'next/image';
import loading from '@/public/loading.svg';

import {NotificationContext} from "notification-provider";

const PRODUCTS_API = '/api/products';

const columns = [
    {
        label: 'Name',
        key: 'name'
    },
    {
        label: 'Type',
        key: 'type'
    },
    {
        label: 'Units',
        key: 'unit',
        format: (value) => {
            return value.name;
        }
    },
    {
        label: 'Price',
        key: 'price',
        format: (value) => {
            return new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(
                value,
            );
        }
    },
    {
        label: 'VAT',
        key: 'vat',
        format: (value) => {
            return `${value}%`;
        }
    }
];

const Loading = () => {
    return <div className='p-12 text-center w-full flex justify-center'>
        <Image src={loading} alt="loading" />
    </div>;
};


const Products = () => {
    // Hook to set the modal state, visible or hidden
    const [modal, setModal] = useState(false);
    // Getting access to the Notification Context
    const {setNotification, clear} = useContext(NotificationContext);
    // Hook to set the data state, fetched from the API
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const fetchData = () => {
        // Fetch products from the API, was creating using MongoDB NextJS API.
        fetch(PRODUCTS_API)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.currentTarget);
        try {
            const response = await fetch(PRODUCTS_API, {
                method: 'POST',
                body: formData,
            });
            const newProduct = await response.json();
            // set the Notification 
            // We add the product to the current list, or we can as well call fetchData to refetch the products
            setData([...data, newProduct]);
            setNotification(`The product '${newProduct.name}' has been added`, 'success');
            setTimeout(clear, 3000); // Clears the notification after 3 seconds
            ev.currentTarget?.reset();
        } catch (error) {
            setNotification('An error occurred while adding the product:' + error, 'error');
        }
        // Close the Modal
        handleClose();
    };

    const handleAddProduct = (ev) => {
        // Show the Modal
        ev.preventDefault();
        setModal(true);
    };
    const handleClose = () => {
        setModal(false);
    };

    return (<>
        <div className="px-4">
            <div className="justify-between	flex flex-row items-center mb-8">
                {/* Header */}
                <div className="flex flex-row items-center gap-2">
                    <Header type={'h1'}>Products</Header>
                    <Button variant={'secondary'}>Guide Me </Button>
                </div>
                <Button onClick={handleAddProduct} variant={'primary'}>Add Product</Button>
            </div>
            {isLoading ? <Loading /> : <Table columns={columns} data={data} />}
        </div>
        <Modal visible={modal} onClose={handleClose} title={`Add new product`} >
            <ProductForm onSubmit={handleSubmit} onClose={handleClose} />
        </Modal>
    </>);
};
export default Products;