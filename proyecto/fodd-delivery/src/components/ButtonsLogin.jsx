import React from 'react'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom'

export const ButtonsLogin = () => {
    const navigate = useNavigate();
    return (
        <div className="container-buttons">
            <h3><span>Food</span>Delivery</h3>
            <div className="buttons">
                <button className="btn-login" onClick={() => navigate("/login")}>Log in</button>
                <button className="btn-register" onClick={() => navigate("/register")}>Register</button>
                <div class="line left"></div>
            </div>
        </div>
    )
}