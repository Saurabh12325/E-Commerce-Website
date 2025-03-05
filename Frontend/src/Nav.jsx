import React from "react";
import {Link} from 'react-router-dom'
const Nav =()=>{
    return(
        <div>
            <ul className='flex gap-8 list-none p-4 w-full bg-pink-400 text-white font-semibold justify-center '>
                <li><Link to = '/'>Product</Link></li>
                <li><Link to = '/add'>Add Product</Link></li>
                <li><Link to = '/update'>Update Product</Link></li>
                <li><Link to = '/logout'>Logout</Link></li>
                <li><Link to = '/profile'>Profile</Link></li>
            </ul>
        </div>
    )
}
export default Nav;