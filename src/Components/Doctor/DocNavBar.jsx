import React, { useState } from 'react'
import { VscAccount } from "react-icons/vsc";
import { doctorapi } from '../../api';
import { useNavigate } from 'react-router-dom';
import { docLogout } from '../../auth/doctorauthSlice';
import { useDispatch } from 'react-redux';
function DocNavBar() {
    const [isOpen, setOpen] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = async () => {
        try {
            const response = doctorapi.post("logout/", { withCredentials: true })
            console.log(response)
            dispatch(docLogout())
            navigate("/doctorLogin")


        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='bg-white flex flex-row justify-around shadow-md mt-6 items-center'>
            <h1 className='text-blue-600 font-bold text-3xl mb-3 '>HeyDoc</h1>
            <div className='flex flex-row p-3 items-center mb-3'>
                <p className="mx-4 text-grey-300 font-semibold text-l hover:text-blue-500" onClick={() => navigate("/doctorHome")}>Dashboard</p>
                <p className="mx-4 text-grey-300 font-semibold text-l hover:text-blue-500 flex flex-row" onClick={() => navigate("/schedule")}>Schedule</p>
                <p className="mx-4 text-grey-300 font-semibold text-l hover:text-blue-500">Patients</p>
                <p className="mx-4 text-grey-300 font-semibold text-l hover:text-blue-500">Messages</p>
                <p className="mx-4 text-grey-300 font-semibold text-l hover:text-blue-500">Requests</p>
                <p className="mx-4 text-grey-300 font-semibold text-l hover:text-blue-500">Appointments</p>




                <div className='relative'>


                    <VscAccount className='text-2xl mx-3 hover:text-blue-500 ml-12' onClick={() => setOpen(!isOpen)} />
                    {isOpen ?





                        <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute">
                            <ul className="py-2 text-sm text-gray-700">






                                <li>

                                    <p className="block px-4 py-2 hover:bg-gray-100 font-semibold" onClick={handleLogout}>Log Out</p>
                                </li>




                            </ul>
                        </div> : <></>
                    }
                </div>
            </div>

        </div>
    )
}

export default DocNavBar