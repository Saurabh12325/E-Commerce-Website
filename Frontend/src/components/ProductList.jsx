
import {useState,useEffect} from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

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

//function to delete product
const deleteProduct = async (id)=>{
    let result = await fetch(`http://localhost:4000/product/${id}`,{
        method:'DELETE'
    })
    result = await result.json()
    console.log(result)
    getProduct()



}
    //function to search product 
    const search = async (e)=>{
        let key = e.target.value
      if (key)
        
{
    let result = await fetch(`http://localhost:4000/search/${key}`)
    if(result){
        result = await result.json()
        setProduct(result)
    }
} else{
    getProduct()
}       
    }
    return (
        <div className=''>
            <h1 className='text-4xl mt-8 text-center'>Product List</h1>
            <input type="text" placeholder='Search Product' 
            onChange={search}
            className='mt-8  border-black border w-[300px] relative left-8'
             />
            <div className=' m-5 p-2'>
                <ul className='flex justify-around bg-pink-400 text-white p-2 border-solid mb-4 font-bold'>
                    <li >S.NO</li>
                    <li>Name</li>
                    <li>Price</li>
                    <li>Company</li>
                    <li>category</li>
                    <li>Delete Product</li>
                    <li>Update Product</li>
                </ul>
            { 
            product.length>0 ?
                product.map((item,index)=>
                    <ul key={item._id} className='flex justify-around bg-gray-200  p-2 border-solid mb-4 '>
                <li >{index+1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.company}</li>
                <li>{item.category}</li>
                <li><img src="https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg" alt="" 
                onClick={()=>deleteProduct(item._id)}
                className='w-10 h-10 rounded-[60%] cursor-pointer'/></li>
                <li className='text-blue-700'><Link to={`/update/${item._id}`}>update</Link></li>
            </ul>)
            :<h1 className='text-2xl text-center'>No Product Available</h1>
            }
            
            </div>



        </div>
    )
}

export default ProductList
