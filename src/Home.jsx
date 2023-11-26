import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-img h-screen w-full bg-indigo-400 flex flex-wrap gap-5 p-5 justify-center items-center'>
            <Link to={'/quiz/science'}>
                <div className='bg-green-400 w-80 h-40 rounded-xl bg-gradient-to-br from-purple-400 to-violet-500 shadow-xl flex justify-center items-center text-3xl font-bold'>
                    Science
                </div>
            </Link>
            <Link to={'/quiz/music'}>
                <div className='bg-green-400 w-80 h-40 rounded-xl bg-gradient-to-br from-purple-400 to-violet-500 shadow-xl flex justify-center items-center text-3xl font-bold'>
                    Music
                </div>
            </Link>
            <Link to={'/quiz/film'}>
                <div className='bg-green-400 w-80 h-40 rounded-xl bg-gradient-to-br from-purple-400 to-violet-500 shadow-xl flex justify-center items-center text-3xl font-bold'>
                    Film & TV
                </div>
            </Link>
            <Link to={'/quiz/anime'}>
                <div className='bg-green-400 w-80 h-40 rounded-xl bg-gradient-to-br from-purple-400 to-violet-500 shadow-xl flex justify-center items-center text-3xl font-bold'>
                    Anime
                </div>
            </Link>
        </div>
    )
}

export default Home