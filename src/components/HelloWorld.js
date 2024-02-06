import React from "react"

const HelloWorld = () => {
    /* const myElement = <h1>Hello JSX !</h1>
    return myElement */

    /* return React.createElement('h1', null, 'Hello React !') */

    /* const myElement = <div><h1>Hello JSX !</h1></div>
    return myElement */

    return React.createElement('div', null, 
        React.createElement('h1', null, 'Hello React !')
    )
}

export default HelloWorld
