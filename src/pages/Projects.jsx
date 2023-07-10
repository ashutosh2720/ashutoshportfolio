import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Anix cart Shoping site',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            image: 'https://via.placeholder.com/300',
        },
        {
            title: 'ConnectIn Social Media Site',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://via.placeholder.com/300',
        },
        {
            title: 'U-Recorder ',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://via.placeholder.com/300',
        },
        {
            title: 'Anix-Component-Library',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://via.placeholder.com/300',
        },
        {
            title: 'CSS Cartoonic Girl',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://via.placeholder.com/300',
        },
        {
            title: 'Project 2',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: 'https://via.placeholder.com/300',
        },



        // Add more projects as needed
    ];

    return (
        <div className="container bg-gray-950 text-white flex flex-wrap p-1 w-[100%] justify-between  items-center ">

            {
                projects.map((project) =>
                    <div className="projects  flex justify-start gap-5 items-center mt-5 w-[400px] h-[400px]  flex-col ">
                        <img src={project.image} alt="" className='w-[70%] h-[70%] rounded-lg' />
                        <h1>{project.title}</h1>

                    </div>
                )
            }

        </div>
    );
};

export default Projects;
