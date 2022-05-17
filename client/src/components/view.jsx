import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const View = (props) => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])
    return (
        <div>
            <h1>{product.title}</h1>
            <h4>Price: ${product.price}</h4>
            <h4>Description : {product.description}</h4>
        </div>
    )
}

export default View;