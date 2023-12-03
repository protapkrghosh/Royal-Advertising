import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AccordionItem = ({ id, title, content, activeItem, setActiveItem }) => {
    const isOpen = activeItem === id;

    const toggleAccordion = () => {
        setActiveItem(isOpen ? null : id);
    };
    return (
        <div className="">
            <h1 className="mb-0 text-[#070234] text-xl border-black border"> 
                <button
                    className="group relative flex w-full text-[#070234] items-center  border p-4 text-left  transition hover:z-[2] focus:z-[3] focus:outline-none"
                    type="button"
                    onClick={toggleAccordion}
                    aria-expanded={isOpen}
                    aria-controls={id}
                >
                    <span className="mr-7 h-5 w-5 shrink-0 transition-transform duration-1000 ease-in-out cursor-pointer ">
                        {isOpen ? <FaMinus /> : <FaPlus />}
                    </span>
                    <p className='lg:font-bold'>{title}</p>
                </button>
            </h1> 
            <div
                id={id}
                className={`transition-max-h duration-300 border-black border ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
                aria-labelledby={id}
            >
                <div className="px-5 py-4 border text-xl">
                    <strong className='text-[#070234] font-thin'>{content}</strong>
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
