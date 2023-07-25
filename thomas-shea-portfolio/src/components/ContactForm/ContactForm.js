import React, { useState } from "react";
import './ContactForm.css'

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
    // Create state variables and set initial value to empty string
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value

        if (inputType === 'name') {
            setName(inputValue)
        } else if (inputType === 'email') {
            setEmail(inputValue)
        } else if (inputType === 'message') {
            setMessage(inputValue)
        }
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if(!name) {
            setErrorMessage('You must include your name');
            return;
        }
        if(!validateEmail(email) || !email) {
            setErrorMessage('You must input a valid email address')
            return;
        }
        if(!message) {
            setErrorMessage('The message field cannot be left blank')
            return;
        }
        alert('Message Sent');

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <form className="form">
                <label for="name">Name:</label>
                <input value={name} name="name" onChange={handleInputChange} type="text" placeholder="Your Name" />
                <label for="email">Email:</label>
                <input value={email} name="email" onChange={handleInputChange} type="email" placeholder="Email" />
                <label for="message">Message:</label>
                <textarea value={message} name="message" onChange={handleInputChange} placeholder="Your Message" />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}

export default ContactForm
