import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Score = ({score, setScore}) => {
    const remark = {
        0: 'Dafa ho jao 🤮',
        1: "Ewww 🤢",
        2: 'Noob 🤬',
        3: "WTF 😵",
        4: 'Below Average 👇',
        5: "Average 🙃",
        6: 'Theek hai 😶',
        7: "Ok ok 🚀",
        8: 'Good ✨',
        9: "Very Good ✌️",
        10: 'Excellent 🔥',
    }
    return (
        <>
            <div className='h-screen flex justify-center items-center bg-img'>
                <div className='bg-gradient-to-br from-indigo-300 to-violet-300 p-5 rounded-lg w-2/3 shadow-2xl text-center'>
                    <h2 className='text-5xl font-bold mb-5'>{remark[score]}</h2>
                    <h2 className='text-5xl font-semibold'>Your score is: {score+1} out of 10!</h2>
                    <Link to={'/'}><button className='bg-blue-400 py-2 px-5 shadow-lg text-xl rounded-md font-semibold mt-5'>Home</button></Link>
                </div>
            </div>
        </>
    )
}

export default Score