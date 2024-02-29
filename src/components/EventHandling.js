import React, { useState } from 'react'

const EventHandling = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    function handleReset() {
        setCount(0);
    }

    return (
        <div>
            <h1>EventHandling</h1>

            <p>Count : {count}</p>

            <button onClick={handleClick}>Increment</button> <span></span><span></span>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default EventHandling