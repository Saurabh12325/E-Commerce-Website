import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [error ,setError] = useState(false)
  const navigate  = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user-info')
    if (auth) {
      navigate('/')
    }
  })
 
  
  const collectData = async () => {
    if (!name || !email || !password) {
      setError(true)
      return;
    }
    setError(false)


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
    localStorage.setItem('user-info',JSON.stringify(result))                                                                                                                                                                   
    if(result){
        navigate('/')  

        
    }

  };


  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="text-center mt-5 p-5 font-semibold text-4xl">Register Yourself</h1>
        <div className="mt-5 p-6 bg-slate-200 w-[400px] border border-black rounded-md shadow-lg">
            <div className="mb-3">
                <label className="block mt-2">Name</label>
                <input
                    type="text"
                    placeholder="Enter the name"
                    className="block p-2 w-full rounded-md border border-sky-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {error && !name && <span className="text-red-500 text-sm">Enter a valid product name</span>}
            </div>
            <div className="mb-3">
                <label className="block mt-2">Email</label>
                <input
                    type="text"
                    placeholder="Enter email"
                    className="block p-2 w-full rounded-md border border-sky-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error && !email && <span className="text-red-500 text-sm">Enter a valid Email</span>}
            </div>
            <div className="mb-3">
                <label className="block mt-2">Password</label>
                <input
                    type="text"
                    placeholder="Enter password"
                    className="block p-2 w-full rounded-md border border-sky-500"
                    value={password}
                    onChange={(e) => setPass(e.target.value)}
                />
                  {error && !email && <span className="text-red-500 text-sm">Enter a valid password</span>}
            </div>
            
            <button
                className="bg-blue-600 text-white p-2 mt-4 w-full rounded-md font-semibold hover:bg-blue-500"
                onClick={collectData}
            >
                Submit
            </button>
        </div>
    </div>
);
};

export default SignUp;
