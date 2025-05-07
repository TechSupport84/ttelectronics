import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'


const Login:React.FC=()=>{
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const [success, setSuccess]= useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()
    const {login} = useAuth()

const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try {
        setLoading(true)
        if(!email ||!password){
            return setError("All  fields are required!")
        }
        await login(email,password)
        setLoading(false)
        setSuccess("Login successfully")
        setEmail("")
        setPassword("")
        navigate("/")
    } catch (error) {
        console.log(error)
        setError("Error  in Logging in...")
  
        if (typeof error === 'object' && error !== null && 'response' in error) {
          const err = error as { response?: { data?: { message?: string } } };
          setError(err.response?.data?.message || "An unexpected error occurred");
        } else {
          setError("An unexpected error occurred");
     } }
     setLoading(false)
}
  return (
    <div className='flex flex-col  between  items-center justify-center md:flex-row'>
    <div className="flex flex-col ml-2 md:border-r-4 border-indigo-500 mr-2">
        <h1 className='text-2xl mb-2 text-pink-600 font-bold text-center mt-5'>TTElectronics</h1>
        <span className='text-gray-400 text-wrap md:text-wrap text-center'>
        Is a global provider of engineered 
        electronics that design and manufacture 
        advanced electronic components and custom solutions for applications in industrial.
        </span>
    <div className="flex flex-col items-center">
        <h3 className='text-center text-2xl text-gray-500 border-b-2'>Product Pub...</h3>
    </div>
    </div>
    <div className="flex flex-col ml-auto m-2 w-[90%] md:w-[50%] p-2 ">
    <h3 className='text-center text-pink-500 text-2xl mb-3'>Login</h3>
<form onSubmit={handleSubmit} className='bg-gray-800 flex flex-col pl-2 m-5 p-2  rounded-lg'>
      {error && (
  <span className="block text-center text-2xl mb-2 p-2 text-red-600">
    {error}
  </span>
)}
{success && (
  <span className="block text-center text-2xl mb-2 p-2 text-green-600">
    {success}
  </span>
)}
<input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}     className=" p-3 pr-16 mt-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Type your Email' />
 <div className="relative w-full max-w-md mx-auto">
 <input
    type={showPassword ? 'text' : 'password'}
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Type your Password"
    className="w-full p-3 pr-16 mt-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
<button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute top-[1.15em] right-4 text-sm text-blue-500 hover:underline md:top-[1.2em]">
    {showPassword ? 'Hide' : 'Show'}
  </button>
</div>
      <button className='duration-300 cursor-pointer ease-in m-5 border border-pink-800 text-pink-800 p-2 mb-2 rounded hover:bg-pink-800  hover:text-white text-2xl'>{loading?"Fetching...":"Login"}</button>
       <div className="flex flex-col items-center justify-center">
        <span className='text-gray-300 text-center border-b-1'>Forgot  <a className='text-blue-600 border-b-2 border-blue-600 duration-300 ease-in' href='/recovery'>password ? </a> recovery it <a className='text-blue-600 hover:border-b-2  hover:border-blue-600  cursor-pointer' href='/recovery'>now</a>.</span>
       <span className='text-gray-400 mb-2 '>  
         Don't  have an accoung ?
      </span>
      <a className='p-2 text-blue-800 w-40 text-center  border border-1 rounded duration-300 ease-in  hover:bg-blue-600 hover:text-white border-blue-500 rounded  mb-4 '  href='/register' >Register </a>
       </div>

      </form>
    </div>
      
    </div>
  )
}

export default Login