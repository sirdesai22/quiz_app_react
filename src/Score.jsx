import React from 'react'
import { Link } from 'react-router-dom'

const Score = () => {
    return (
        <>
            <div className='h-screen flex justify-center items-center bg-img'>
                <div className='bg-gradient-to-br from-indigo-300 to-violet-300 p-5 rounded-lg w-2/3 shadow-2xl text-center'>
                    <h2 className='text-5xl font-semibold'>Your score is: 100</h2>
                    <Link to={'/'}><button className='bg-blue-400 py-2 px-5 shadow-lg text-xl rounded-md font-semibold mt-5'>Home</button></Link>
                </div>
            </div>
        </>
    )
}

export default Score