import React from "react";
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
    const auth = localStorage.getItem('user-info')
    const Navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        Navigate('/signup')
    }
    return (

        <div>
            <img src ="https://marketplace.canva.com/EAGQ1aYlOWs/1/0/1600w/canva-blue-colorful-illustrative-e-commerce-online-shop-logo-bHiX_0QpJxE.jpg" alt="logo" className="w-[50px] rounded-[50%]  absolute m-1 "/>
            {auth ?
                <ul className='flex gap-8  p-4 w-full bg-pink-400 text-white font-semibold justify-center'>
                    <li><Link to='/'>Product</Link></li>
                    <li><Link to='/add'>Add Product</Link></li>
                    <li><Link to='/update'>Update Product</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link onClick={logout} to='/signup'>Logout ({JSON.parse(auth).name})</Link></li>
                </ul>

                :
                <ul className='flex gap-8  p-4 w-full bg-pink-400 text-white font-semibold  justify-end '>

                    <li><Link to='/signUp'>SignUp</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            }
        </div>




    )
}
export default Nav;