import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {

    return (
        <nav className="bg-blue-500 w-full py-3">
            <div className="container">
                <div className="w-18 mx-auto text-center space-x-3">
                    <Link to="/" className='text-white'>Home</Link>
                    <Link to="/effect" className='text-white'>Effect</Link>
                    <Link to="/context" className='text-white'>Context</Link>
                    <Link to="/reducer" className='text-white'>Reducer</Link>
                    <Link to="/callback" className='text-white'>Callback</Link>
                    <Link to="/memo" className='text-white'>Memo</Link>
                    <Link to="/ref" className='text-white'>Ref</Link>
                    <Link to="/custom" className='text-white'>Custom</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;