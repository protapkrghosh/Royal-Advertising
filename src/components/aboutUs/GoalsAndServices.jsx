import React from 'react';
import Services from './Services';

const GoalsAndServices = () => {
    return (
        <div data-aos="fade-left" className='max-w-[1300px] mx-auto flex flex-col lg:flex-row justify-between mb-[100px]'>
            <Services></Services>
            <div className='lg:w-[50%] px-5 lg:px-0 mt-7 lg:mt-0'>
                <h6 className='font-semibold tracking-widest lg:mb-4'>WHO WE ARE</h6>
                <h1 className='text-2xl lg:text-4xl font-bold tracking-wide mb-2 lg:mb-5'>Let's Work Together To <br /> Make Your Goals A Reality</h1>
                <p className='text-gray-500 text-lg tracking-wide'>Whether you're starting a new business or revamping an old one, Reflective Design is the top digital marketing agency in Lucknow that can help you grow and succeed online. We specialize in helping businesses go online and succeed through various digital marketing channels, such as Social Media marketing and Google ranking. Trust the best digital marketing company in Lucknow, Reflective Design, to help your business succeed in the online world.</p>
            </div>
        </div>
    );
};

export default GoalsAndServices;