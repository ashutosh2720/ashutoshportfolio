import React from 'react'
import Typewriter from 'typewriter-effect';



const Header = () => {
    return (
        <div className='w-[100%] bg-slate-950	 flex  text-white h-[400px]'>
            <div className="left-side h-[100%] text-5xl flex-col gap-10 flex justify-center items-center pl-5 w-[60%]">
                <h1 className='text-3xl'>Welcome to my portfolio my name is ashutosh singh and i am a</h1>
                <div className="typwriter text-yellow-500">
                    <Typewriter
                        options={{
                            strings: [
                                'Web Developer',
                                'UI/UX Designer',
                                'Passionate Learner',
                            ],
                            autoStart: true,
                            loop: true,
                        }}

                    />
                </div>
            </div>
            <div className="right-side flex w-[40%] justify-center items-center">
                <img src="https://avatars.githubusercontent.com/u/109720375?v=4" alt="" className='lg:w-[300px] lg:h-[300px] sm:w-[100px] xm:hidden rounded-full border-2 shadow-lg' />
            </div>
        </div>
    )
}

export default Header
