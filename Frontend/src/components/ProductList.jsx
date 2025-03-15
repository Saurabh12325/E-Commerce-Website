import {useState,useEffect} from 'react'
import React from 'react'

function ProductList() {

    const [product,setProduct] = useState([])

    useEffect(()=>{
        getProduct();
    },[])
    const getProduct =async ()=>{
        let result = await fetch('http://localhost:4000/products')
        result = await result.json()
        setProduct(result)
    }
    console.log(product)
    return (
        <div className=''>
            <h1 className='text-4xl mt-8 text-center'>Product List</h1>
            <div className=' m-5 p-2'>
                <ul className='flex justify-around bg-gray-200 p-2 border-solid mb-4'>
                    <li >S.NO</li>
                    <li>Name</li>
                    <li>Price</li>
                    <li>Company</li>
                    <li>category</li>
                </ul>
            {
                product.map((item,index)=>
                    <ul key={index} className='flex justify-around bg-gray-200 p-2 border-solid mb-4'>
                <li >{index+1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.company}</li>
                <li>{item.category}</li>
            </ul>)
            }
            
            </div>
        </div>
    )
}

export default ProductList
