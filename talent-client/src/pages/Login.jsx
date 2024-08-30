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
                    <div style={{
                        marginBottom: 15
                    }}>
                        <label for="id" style={{ marginRight: 10 }}><strong>Account:</strong></label>
                        <input type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <label for="password" style={{ marginRight: 2 }}><strong>Password:</strong></label>
                        <input type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <button style={{ marginRight: 30, marginTop: 15 }} disabled={!validateForm()}>Login</button>
                    </div>
                </form>
            </div >
        </>
    )
}