import React, { useEffect } from 'react'

import  { useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';

function UpdateProduct() {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState(false);
    const params = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
       
        getProductDetails();
    }, [])
    const getProductDetails = async () => {
        let result = await fetch(`http://localhost:4000/product/${params.id}`)
        result = await result.json()
        setName(result.name)
        setCompany(result.company)
        setPrice(result.price)
        setCategory(result.category)
    }
    const updateProduct = async () => {

        if (!name || !company || !price || isNaN(price) || !category) {
            setError(true);
            return;
        }

        setError(false);
     let responses = await fetch(`http://localhost:4000/product/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({ name, company, price, category }),
      headers: {
        "content-type": "application/json"
      }
    
     })
     responses = await responses.json()
     navigate('/')
      
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-center mt-5 p-5 font-semibold text-4xl">Update Product</h1>
            <div className="mt-5 p-6 bg-slate-200 w-[400px] border border-black rounded-md shadow-lg">
                <div className="mb-3">
                    <label className="block mt-2">Name</label>
                    <input
                        type="text"
                        placeholder="Enter the product name"
                        className="block p-2 w-full rounded-md border border-sky-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {error && !name && <span className="text-red-500 text-sm">Enter a valid product name</span>}
                </div>
                <div className="mb-3">
                    <label className="block mt-2">Company</label>
                    <input
                        type="text"
                        placeholder="Enter company name"
                        className="block p-2 w-full rounded-md border border-sky-500"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                    {error && !company && <span className="text-red-500 text-sm">Enter a valid company name</span>}
                </div>
                <div className="mb-3">
                    <label className="block mt-2">Price</label>
                    <input
                        type="text"
                        placeholder="Enter price"
                        className="block p-2 w-full rounded-md border border-sky-500"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    {error && (!price || isNaN(price)) && <span className="text-red-500 text-sm">Enter a valid price</span>}
                </div>
                <div className="mb-3">
                    <label className="block mt-2">Category</label>
                    <input
                        type="text"
                        placeholder="Enter category"
                        className="block p-2 w-full rounded-md border border-sky-500"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    {error && !category && <span className="text-red-500 text-sm">Enter a valid category</span>}
                </div>
                <button
                    className="bg-blue-600 text-white p-2 mt-4 w-full rounded-md font-semibold hover:bg-blue-500"
                    onClick={updateProduct}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}



export default UpdateProduct
