import React, { useState } from 'react';
import Links from './Links';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" }
];


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links =  navLinks.map(route => <Links key={route.id} route = {route}></Links>)

    return (
        <nav className='flex justify-between mx-10 my-4'>
            <span className='flex'  onClick={()=> setOpen(!open)}>
                {
                    open?<X className='md:hidden mr-4'></X>:<Menu className='md:hidden mr-4'></Menu>
                }
                <ul className={`md:hidden absolute duration-1000 bg-amber-200
                    ${open? 'top-4':'-top-40'}
                    `}>
                    {links}
                </ul>
            <h1 className=''>My Navbar</h1>
            </span>
            <ul className='md:flex hidden'>
            {
               links
            }
            </ul>


            {/* <ul className='flex'>
                {
                    navLinks.map(route => <li className='mr-10'>
                        <a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}
            {/* <ul className='flex'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}

            <button>Sign in</button>
        </nav>
    );
};

export default Navbar;