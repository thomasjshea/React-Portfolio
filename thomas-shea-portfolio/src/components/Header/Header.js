import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';


export default function Header({currentPage, handlePageChange}) {
    return (
        <div className='header'>
            <h1 className='heading'>Thomas Shea</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    )
}