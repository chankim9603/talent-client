import React, { useState } from "react";
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return (email.length > 0 && password.length > 0);
    }

    function handleLogin(event) {
        event.preventDefault();
    }

    return (
        <>
            <div className="LoginFunction" >
                <form onSubmit={handleLogin}>
                    <div className='form-group'>
                        <label for="id" className="form-label"><strong>Account:</strong></label>
                        <input type="text"
                            className='form-input'
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='form-group'>
                        <label for="password" className="form-label"><strong>Password:</strong></label>
                        <input type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='form-input'></input>
                    </div>
                    <div>
                        <button disabled={!validateForm()}>Login</button>
                    </div>
                </form>
            </div >
        </>
    )
}