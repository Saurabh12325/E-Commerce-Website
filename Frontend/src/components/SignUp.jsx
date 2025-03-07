import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {

  const [name, setName] = useState("");
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const navigate  = useNavigate();
  
  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch('http://localhost:4000/register',{
        method:'POST',
        body:JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json',
        },
    })
    result = await result.json()
    console.warn(result)
    if(result){
        navigate('/')
    }
  };
 

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-center mt-4 p-5 font-semibold text-4xl">
        Register Yourself
      </h1>
      <div className="mt-5 p-4 bg-slate-200 w-[500px] border-black border rounded-[4px]">
        <label htmlFor="" className="relative top-7">
          Name
        </label>
        <input
          type="text"
          placeholder="Enter your name"
          className="block p-2 w-[80%] border-sky-500 border rounded-[4px] ml-[75px]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
};

export default SignUp;
