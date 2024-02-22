import React, { useState } from 'react'

const User = () => {
    /* const [firstName, setFirstName] = useState("Theodore");
    const [lastName, setLastName] = useState("Roosevelt");
    const [email, setEmail] = useState("theodoreroosevelt@gmail.com"); */
    const [user, setUser] = useState({
        firstName: "Elon",
        lastName: "Musk",
        email: "elonmusk@gmail.com"
    })

    /* function updateUser() {
        setFirstName("Teddy");
        setLastName("Roose");
        setEmail("teddyroose@gmail.com")
    } */
    function updateUser() {
        setUser({
            firstName: "Elon - Updated",
            lastName: "Musk - Updated",
            email: "elonmuskupdated@gmail.com"
        })
    }

    return (
        <div>
            {/* <h1>User Details</h1>
            <p>First Name : {firstName}</p>
            <p>Last Name : {lastName}</p>
            <p>Email : {email}</p> */}
            <h1>User Details</h1>
            <p>First Name : {user.firstName}</p>
            <p>Last Name : {user.lastName}</p>
            <p>Email : {user.email}</p>

            <button type="submit" onClick={updateUser}>Update User</button>
        </div>
    )
}

export default User