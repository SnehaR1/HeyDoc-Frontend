import React, { useState } from 'react'
import drimage from '../../Images/drimage.jpg';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';
import { LiaEyeSlashSolid } from "react-icons/lia";
import { LiaEyeSolid } from "react-icons/lia";
import { useDispatch } from 'react-redux';
import { login } from '../../auth/authslice';
function Login() {
    const bodyStyle = {
        backgroundImage: `url(${drimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        backgroundAttachment: 'fixed',
        overflowY: 'auto',
    };
    const [info, setInfo] = useState({})
    const [showPass, setShowpass] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()
        for (const key in info) {
            if (typeof info[key] === 'string') {
                info[key] = info[key].trim();
            }
        }
        try {

            const response = await api.post("login/", info)
            console.log(response)

            const email = response.data.data["email"]
            const phone = response.data.data["phone"]
            const username = response.data.data["username"]
            let role;
            if (response.data.data["is_staff"]) {

                role = "admin"
            } else {
                role = "user"
            }
            const is_staff = response.data.data["is_staff"]
            const user_id = response.data.data["user_id"]
            console.log(is_staff)
            dispatch(login({ email, phone, username, role, is_staff, user_id }))

            navigate("/")

        } catch (error) {
            console.log(error)
        }


    }
    return (
        <div style={bodyStyle} className="flex justify-center items-center h-screen ">


            <div className="max-w-xl mx-auto px-6 py-8 bg-white shadow-md rounded-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign In</h1>
                <form className="space-y-4 " onSubmit={handleSubmit} >
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input onChange={(e) => setInfo({ ...info, [e.target.name]: e.target.value })} type="email" name="email" className="my-3 block w-full md:w-96 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary p-3" placeholder="Enter your Email" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <div className='relative'>

                            <input id='password' onChange={(e) => setInfo({ ...info, [e.target.name]: e.target.value })} type="password" name="password" className="my-3 block w-full md:w-96 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary p-3" placeholder="Enter your Password" required />
                            {showPass ? <LiaEyeSolid onClick={() => { setShowpass(showPass => !showPass); const inputElement = document.getElementById("password"); inputElement.type = "text" }} className="absolute inset-y-0 right-3 flex items-center cursor-pointer my-auto" /> : <LiaEyeSlashSolid className="absolute inset-y-0 right-3 flex items-center cursor-pointer my-auto" onClick={() => { const inputElement = document.getElementById("password"); inputElement.type = "password"; setShowpass(showPass => !showPass) }} />}
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="my-3  w-full py-3 px-4 border border-grey-300 rounded-md shadow-sm text-white bg-black hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
                            Sign in
                        </button>
                    </div>
                    <div className="text-center">
                        <p className="text-primary ">Don't have an account? <span className="hover:underline" onClick={() => navigate('/register')}>Sign up</span></p>
                    </div>
                    <div className="text-center">
                        <p className="text-primary ">Doctor? <span className="hover:underline" onClick={() => navigate("/doctorLogin")}>Sign in here</span></p>
                    </div>
                    <div className="text-center">
                        <p className="text-primary hover:underline">Forgot password?</p>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login