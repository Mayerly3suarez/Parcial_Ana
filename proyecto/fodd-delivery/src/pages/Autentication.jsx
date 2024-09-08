import React, { useEffect, useState } from 'react'
import '../styles/Login.css'
import Delivery from '../assets/Delivery.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Autentication = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginService = async (e) => {
        e.preventDefault();

        const data = {
            username: username,
            password: password
        }

        await axios.post("http://37.60.252.97:3000/api/users/login", data)
            .then((resp) => {
                console.log(resp)
                if (resp.status == 200) {
                    navigate("/dashboard")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="container_principal flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
          <img
            className="Delivery w-32 h-32 object-cover mb-8"
            src={Delivery}
            alt="logo Delivery"
          />
      
          <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
            <h5 className="font-bold text-2xl text-gray-900 mb-6">Login</h5>
      
            <input
              type="text"
              placeholder="Username"
              className="mt-3 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setUsername(e.target.value)}
            />
      
            <input
              type="password"
              placeholder="Password"
              className="mt-4 p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setPassword(e.target.value)}
            />
      
            <button
              className="mt-5 bg-[#121534] w-full py-3 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 ease-in-out"
              onClick={loginService}
            >
              Login
            </button>
          </div>
        </div>
      );
      
}