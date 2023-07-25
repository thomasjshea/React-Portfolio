import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm'
import '../components/Container/Container.css'

export default function Contact() {
    return (
        <div className='container'>
            <h1 className='section-heading'>Contact Me!</h1>
            <ContactForm />
        </div>
    );
}