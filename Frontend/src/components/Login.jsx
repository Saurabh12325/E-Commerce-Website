import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
   const [email, setEmail] = React.useState("");
  const [password, setPass] = React.useState("");
  const [error,setError] = React.useState(false)
  
   const navigate = useNavigate();
  const collectData = async () => {
    if(!email || !password){
        setError(true)
        return;
    }
    setError(false)

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
            <h1 className="text-center mt-5 p-5 font-semibold text-4xl">Login</h1>
            <div className="mt-5 p-6 bg-slate-200 w-[400px] border border-black rounded-md shadow-lg">
                <div className="mb-3">
                    <label className="block mt-2">Email</label>
                    <input
                        type="text"
                        placeholder="Enter the email"
                        className="block p-2 w-full rounded-md border border-sky-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error && !email && <span className="text-red-500 text-sm">Enter a valid email</span>}
                </div>
                <div className="mb-3">
                    <label className="block mt-2">Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="block p-2 w-full rounded-md border border-sky-500"
                        value={password}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    {error && !password && <span className="text-red-500 text-sm">Enter a valid password</span>}
                </div>
                <button onClick={collectData} className="block p-2 w-full bg-sky-500 text-white rounded-md">Login</button>
            </div>
        </div>
    );
    }
    export default Login;