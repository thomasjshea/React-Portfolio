import React, { useState } from 'react';
import Header from '../Header/Header'
import Portfolio from '../../pages/Portfolio';
import Resume from '../../pages/Resume';
import About from '../../pages/About'
import Contact from '../../pages/Contact';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}