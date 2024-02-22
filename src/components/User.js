import React, { useState } from 'react'

const User = () => {
    const [firstName, setFirstName] = useState("Theodore");
    const [lastName, setLastName] = useState("Roosevelt");
    const [email, setEmail] = useState("theodoreroosevelt@gmail.com");

    function updateUser() {
        setFirstName("Teddy");
        setLastName("Roose");
        setEmail("teddyroose@gmail.com")
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>First Name : {firstName}</p>
            <p>Last Name : {lastName}</p>
            <p>Email : {email}</p>

            <button type="submit" onClick={updateUser}>Update User</button>
        </div>
    )
}

export default User