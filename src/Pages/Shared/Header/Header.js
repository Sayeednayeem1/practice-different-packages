import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='text-white'>
            <Navbar
                className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-6 text-white'
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9 text-white"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                        Flowbite
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2 ">
                    <Button>
                        Get started
                    </Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse >
                    <Navbar.Link
                        href="/"
                        active={true}
                    >
                        <h4 className='text-white dark:text-white font-bold'>Home</h4>
                    </Navbar.Link>
                    <Navbar.Link href="/about" >
                        <h4 className='text-white dark:text-white font-bold'>About</h4>
                    </Navbar.Link>
                    <Navbar.Link href="/reactSlider">
                    <h4 className='text-white dark:text-white font-bold'>React Slick</h4>
                    </Navbar.Link>
                    <Navbar.Link href="/skills">
                    <h4 className='text-white dark:text-white font-bold'>Skills</h4>
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                    <h4 className='text-white dark:text-white font-bold'>Contact</h4>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;