import React, { useState } from "react";
import './Registration.css';

export default function Registration() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return (email.length > 0 && password.length > 0 && firstName.length > 0 && lastName.length > 0);
    }

    function handleRegistration() {
        return;
    }

    return (
        <div className="registration">
            <form onSubmit={handleRegistration}>
                <div className="form-group">
                    <label className="form-label"><strong>First Name: </strong></label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label"><strong>Last Name: </strong></label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label"><strong>Email: </strong></label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label"><strong>Password: </strong></label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-input"
                    />
                </div>
                <button type="submit" disabled={!validateForm()} className="submit-button">
                    Register
                </button>
            </form>
        </div>
    )
}
