import React, { useState } from 'react'

const ConditionalRendering = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    /* let message;

    if (isLoggedIn) {
        message = <p>Welcome, User.</p>
    } else {
        message = <p>Please, Login.</p>
    } */

    function handleClick() {
        setIsLoggedIn(true)
    }

    return (
        <div>
            {/* {message} */}
            {/* {isLoggedIn ? <p>Welcome, User.</p> : <p>Please, Login.</p>} */}
            {isLoggedIn && <p>Welcome, User.</p>}
            <br /><br />
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default ConditionalRendering