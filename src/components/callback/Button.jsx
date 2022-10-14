import React from 'react'

const Button = ({ text, handleClick }) => {

    console.log(`${text} component rendered`);

    return (
        <button onClick={handleClick} className="bg-red-600 text-white py-2 px-5">{ text }</button>
    )
}

export default React.memo(Button);