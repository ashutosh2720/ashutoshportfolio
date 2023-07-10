import React from 'react'
import Header from '../components/Header'
import Projects from './Projects'

function Home() {
    return (
        <div className='w-full min-h-full bg-gray-950 p-2'>
            <div className="header w-[100%]">
                <Header />
                <hr />
                <h1 className='text-white text-center text-2xl'>projects</h1>
                <Projects />
            </div>
        </div>
    )
}

export default Home
