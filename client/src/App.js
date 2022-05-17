import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('')

  useEffect( () => {
    axios.get('http://localhost:8000/api/products')
    .then(res => {
      console.log(res.data);
      setProducts(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  const createProduct = (e) =>{
    e.preventDefault();
    console.log("function is running !!!!!!!")
    const newProduct = {
      title: title,
      price: price,
      description: description,
    }
    axios.post('http://localhost:8000/api/products/new', newProduct)
    .then(res => {
      console.log("SUCCESS!!!!!!!!!!!!!!!!", (res.data))
    })
    .catch(err => {
      console.log(err)
    })
  }
  


  return(
    <div className="App">
      
        <h1>Product Manager</h1>
        <form onSubmit={createProduct}>
          <div>
            <label htmlFor='title'>Title</label>
            <input name='title' onChange={(e) => setTitle(e.target.value)} value={title} />
          </div>
          <div>
            <label htmlFor='price'>Price:</label>
            <input name='price' type='number' onChange={(e) => setPrice(e.target.value)} value={price} />
          </div>
          <div>
            <label htmlFor='description'>Description</label>
            <input name='description' onChange={(e) => setDescription(e.target.value)} value={description} />
          </div>
          <input type='submit' value="Create"/>
        </form>
        {/* {products.map((products, index) => {
          return(
          <div>
            <h1>{products.title}</h1>
            <h2>{products.price}</h2>
            <h2>{products.description}</h2>
          </div>
          )
        })} */}
      



    </div>
  );
}

export default App;
