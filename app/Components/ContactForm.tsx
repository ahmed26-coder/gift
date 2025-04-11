'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm({ showName = true }: { showName?: boolean }) {
    const [message, setMessage] = useState('');
    const form = useRef<HTMLFormElement>(null);
    const [showNameField, setShowNameField] = useState(showName);
    const [name, setName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [selected, setSelected] = useState<'first' | 'second'>('first');

    const handleShowNameField = (show: boolean) => {
        setShowNameField(show);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !message) {
            setErrorMessage('Please fill in both the name and message fields.');
        } else {
            emailjs
                .sendForm('service_alg8q9a', 'template_18j18fa', form.current!, 'Eyawzki3vdn0GuKpm')
                .then(
                    (result) => {
                        console.log(result.text);
                        alert('Message sent successfully!');
                        setMessage('');
                        setName('');
                        setErrorMessage('');
                    },
                    (error) => {
                        console.log(error.text);
                        setErrorMessage('Failed to send message.');
                    }
                );
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full gap-6 px-4">
                <div className="flex items-center w-full md:w-[40%] justify-center">
                    <div className="w-full space-y-8">
                        <div className="p-2 rounded-xl backdrop-blur-sm border border-gray-700/50">
                            <div className="relative flex items-center">
                                <div
                                    className={`absolute h-12 transition-all duration-500 ease-out rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/25
                                    ${selected === 'first' ? 'left-0 w-1/2' : 'left-1/2 w-1/2'}`}
                                />
                                <button
                                    onClick={() => setSelected('first')}
                                    className={`flex-1 relative z-10 px-4 md:px-8 py-3 text-base md:text-xl font-medium transition-colors duration-300 rounded-lg
                                    ${selected === 'first'
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-gray-600'}`}
                                >
                                    Identity information
                                </button>
    
                                <button
                                    onClick={() => setSelected('second')}
                                    className={`flex-1 relative z-10 px-4 md:px-8 py-3 text-base md:text-xl font-medium transition-colors duration-300 rounded-lg
                                    ${selected === 'second'
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-gray-600'}`}
                                >
                                    Unknown
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
    
                <form ref={form} onSubmit={handleSubmit} className="form-container w-full md:w-[60%]">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-600">Contact Us</h2>
    
                    {showNameField && selected === 'first' && (
                        <div className="transition-all duration-300 w-full">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                name="name"
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-2 rounded-2xl mb-3 border-2 border-gray-300 outline-0 focus:border-blue-500 py-2 pl-5"
                            />
                        </div>
                    )}
    
                    <textarea
                        placeholder="Your message"
                        value={message}
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-2 rounded-2xl mb-3 border-2 border-gray-300 outline-0 focus:border-blue-500 py-2 pl-5"
                        rows={8}
                    />
    
                    {errorMessage && <div className="text-red-500 text-sm mt-2">{errorMessage}</div>}
    
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-4 w-full text-xl md:text-2xl font-medium py-2 rounded mt-4"
                        disabled={!name || !message}
                    >
                        Send
                    </button>
    
                    <button
                        onClick={() => handleShowNameField(!showNameField)}
                        className="mt-4 text-blue-500"
                    >
                        {showNameField ? '' : ''}
                    </button>
                </form>
            </div>
        </>
    );
}    
