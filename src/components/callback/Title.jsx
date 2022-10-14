import React from 'react'

const Title = () => {

    console.log('Title component rendered');
    return (
        <div className="bg-green-500 py-2 text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minus dolorem laudantium libero? Minima, qui tempora est dignissimos quam harum fugiat iure voluptas maiores eveniet deleniti odit atque minus dolorum?
        </div>
    )
}

export default React.memo(Title);