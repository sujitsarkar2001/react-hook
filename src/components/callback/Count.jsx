import React from 'react'

const Count = ({ text, count }) => {

    console.log(`${text} component rendered`);

    return <div className="text-green-500 text-lg">{ text } : { count }</div>
}

export default React.memo(Count);