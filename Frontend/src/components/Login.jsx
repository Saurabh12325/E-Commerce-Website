import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
   const [email, setEmail] = React.useState("");
  const [password, setPass] = React.useState("");
   const navigate = useNavigate();
  const collectData = async () => {
    console.log(email, password);
    let result = await fetch('http://localhost:4000/login', {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json',
        }
        
    })
    result = await result.json()
    console.warn(result)
    if(result.name){
        localStorage.setItem('user-info', JSON.stringify(result))
        navigate('/')
    }else{
        alert('Invalid Credentials')
    }
  }


    return (

        <div className="flex flex-col justify-center items-center">
        <h1 className="text-center mt-5 p-5 font-semibold text-4xl">
          Login Yourself
        </h1>
        <div className="mt-5 p-4 bg-slate-200 w-[500px] border-black border rounded-[4px]">
          
          <label htmlFor="" className="relative top-7">
            Email
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            className="block p-2 mb-2 w-[80%] rounded-[4px] border-sky-500 border ml-[75px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="" className="relative top-7 right-2">
            Password
          </label>
          <input
            type="text"
            placeholder="Enter your password"
            className="block p-2 mb-2 w-[80%] rounded-[4px] ml-[75px] border-sky-500 border"
            value={password}
            onChange={(e) => setPass(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white p-2 mt-4 text-center relative left-[35%] rounded-xl font-semibold hover:bg-slate-400 w-[150px]"
            onClick={collectData}
          >
            Submit
          </button>
        </div>
      </div>
    );
    }
    export default Login;