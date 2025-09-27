import React from 'react';

const Links = ({route}) => {
    return (
        
            <li className='lg:mr-10 px-4 rounded-sm hover:bg-gray-300'>
                <a href={route.path}>{route.name}</a>
            </li>
        
    );
};

export default Links;