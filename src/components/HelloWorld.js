import React from "react"

const HelloWorld = () => {
    /* const myElement = <h1>Hello JSX !</h1>
    return myElement */

    /* return React.createElement('h1', null, 'Hello React !') */

    /* const myElement = <div><h1>Hello JSX !</h1></div>
    return myElement */

    /* return React.createElement('div', null, 
        React.createElement('h1', null, 'Hello React !')
    ) */

    /* To Return Multiple HTML Elements */
    /* return (
            <div>
            <h1>Title</h1>
            <h2>Sub Title</h2>
            <p>Paragraph</p>
            <img alt="" />
        </div>
    ) */

    /* To Add a Event Handler on a Element */
    function handleClick() {
        alert("Button Cliked !")
    }

    /* To Use a JS Expression on JSX */
    const name = "John Doe"
    const addition = 1 + 5

    return (
        <>
            {/* To Add a CSS Class on a Element */}
            <h1 className="title">Title</h1>
            <h2>Sub Title</h2>
            <p>Paragraph</p>
            {/* To Use a JS Expression on JSX */}
            <p>Hello {name}</p>
            <p>1 + 5 Equals : {addition}</p>
            <img alt="" />
            {/* To Add a Event Handler on a Element */}
            <button onClick={handleClick}>Click</button>
        </>
    )

}

export default HelloWorld
