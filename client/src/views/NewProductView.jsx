import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


export default function NewProductView(props) {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleNewProductSubmit = (event) => {
        event.preventDefault();

        const newProduct = {
            title,
            price,
            description,
        };

//this will send a POST reuest to the server to create a new product
        axios
            .post('http://localhost:8000/api/products/new', newProduct)
            .then((res) => {
// navigate to the new route after succeccful create
                navigate('/products/new');
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };



    return (
        <div>
            <h1>Product Manager</h1>
            <form
                onSubmit={(event) => {
                    handleNewProductSubmit(event);
                }}
            >

                <div>
                    <label> Title: </label>
                    <input type="text"
                        onChange={(event) => {
                            setTitle(event.target.value)
                        }}
                    />
                    <br />
                </div>

                <div>
                    <label> Price: </label>
                    <input type="text"
                        onChange={(event) => {
                            setPrice(event.target.value)
                        }}
                    />
                    <br />
                </div>

                <div>
                    <label> Description: </label>
                    <input type="text"
                        onChange={(event) => {
                            setDescription(event.target.value)
                        }}
                    />
                    <br />
                </div>

                <button>Submit</button>

            </form>
            <hr />
        </div>
    )
}