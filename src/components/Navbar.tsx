'use client';

import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b-3 border-neo-black bg-neo-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-3xl font-black tracking-tighter uppercase bg-neo-black text-neo-white px-2 py-1 transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer border-2 border-transparent hover:border-neo-black hover:bg-neo-primary hover:text-neo-black">
                            DORKSENSE
                        </span>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        {['About', 'Features', 'Team'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-xl font-bold uppercase hover:text-neo-primary hover:underline decoration-4 underline-offset-4 transition-all"
                            >
                                {item}
                            </button>
                        ))}
                        <button className="neo-btn bg-neo-accent hover:bg-neo-secondary text-neo-black">
                            GET WEIRD
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 border-3 border-neo-black bg-neo-primary shadow-neo-sm active:shadow-none active:translate-x-[3px] active:translate-y-[3px]"
                        >
                            <span className="sr-only">Open menu</span>
                            <div className="w-6 h-1 bg-black mb-1"></div>
                            <div className="w-6 h-1 bg-black mb-1"></div>
                            <div className="w-6 h-1 bg-black"></div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden border-t-3 border-neo-black bg-neo-white p-4">
                    <div className="flex flex-col space-y-4">
                        {['About', 'Features', 'Team'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="text-2xl font-bold uppercase border-2 border-neo-black p-2 hover:bg-neo-green shadow-neo-sm"
                            >
                                {item}
                            </button>
                        ))}
                        <button className="neo-btn bg-neo-accent w-full">
                            GET WEIRD
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
