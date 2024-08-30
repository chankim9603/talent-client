import React, { useState } from "react";

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
        <>
            <div className="Registration">
                <form onSubmit={handleRegistration}>
                    <div>
                        <label></label>
                        <input></input>
                    </div>
                    <div>
                        <label></label>
                        <input></input>
                    </div>
                    <div>
                        <label></label>
                        <input></input>
                    </div>
                    <div>
                        <label></label>
                        <input></input>
                    </div>
                </form>

            </div>
        </>
    )
}