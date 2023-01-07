import React from 'react';
import 'animate.css';

const Skills = () => {
    return (
        <div className='mt-8 mb-14'>
            <section className=" dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="max-w-screen-md mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight text-center animate__animated animate__heartBeat font-extrabold text-white dark:text-white">My creative skills and experiences</h2>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div className='animate__animated animate__backInLeft'>
                            <h3 className="mb-2 text-xl font-bold text-white dark:text-white ">Expertise</h3>
                            <p className="text-white dark:text-white">HTML, CSS, Bootstrap, Tailwind css, Daisy UI, JavaScript, React js, React Router Dom, firebase.</p>
                        </div>
                        <div className='animate__animated animate__backInDown'>
                            <h3 className="mb-2 text-xl font-bold text-white dark:text-white ">Comfortable</h3>
                            <p className="text-white dark:text-white">Node.js, MongoDB, Express.js, CRUD operation.</p>
                        </div>
                        <div className='animate__animated animate__backInRight'>
                            <h3 className="mb-2 text-xl font-bold text-white dark:text-white ">Familiar</h3>
                            <p className="text-white dark:text-white">Tanstack query and Material UI.</p>
                        </div>
                        <div className='animate__animated animate__backInLeft'>
                            <h3 className="mb-2 text-xl font-bold text-white dark:text-white ">Tools</h3>
                            <p className="text-white dark:text-white">GitHub, Netlify, Vercel, Chrome Dev Tool, Figma, VS Code.</p>
                        </div>
                        <div className='animate__animated animate__backInUp'>
                            <h3 className="mb-2 text-xl font-bold text-white dark:text-white ">Extra Skills</h3>
                            <p className="text-white dark:text-white">Team Work, Good communication, subject oriented, hardworking.</p>
                        </div>
                        <div className='animate__animated animate__backInRight'>
                            <h3 className="mb-2 text-xl font-bold text-white dark:text-white ">Languages</h3>
                            <p className="text-white dark:text-white">1. Bangla - native 2. English - Professional 3. Hindi - Average.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;