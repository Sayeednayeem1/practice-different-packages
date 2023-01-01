import { Button, Navbar } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleThemeChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className='text-white'>
            <Navbar
                className='bg-gradient-to-r from-black via-purple-500 to-black  py-6 text-white'
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://flowbite.com/">
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                        Abu Sayed
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2 ">
                    <Button onClick={handleThemeChange}>
                        dark/Light
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
                    <Navbar.Link href="/contact">
                    <h4 className='text-white dark:text-white font-bold'>Contact</h4>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;