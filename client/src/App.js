import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import View from './components/view';


function App() {

  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(res => {
        console.log(res.data);
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const createProduct = (e) => {
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



  return (
    <BrowserRouter>
      <div className="App">


        <Routes>
          <Route path='/' element={
            <div>
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
                <input type='submit' value="Create" />
              </form>
              {products.map((products, index) => {
                return (
                  <div key={products._id}>
                    <li> <Link to={`/view/${products._id}`}>{products.title}</Link></li>
                  </div>
                )
              })}
            </div>
          } />
          
          <Route path='/view/:id' element={<View />} />
        </Routes>


      </div>
    </BrowserRouter>

  );
}

export default App;
