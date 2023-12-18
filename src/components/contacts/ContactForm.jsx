import React, { useRef } from 'react';
import contact from "../../data/animations/Contact.json"
import Lottie from "lottie-react";
import useAOSInit from "../../hooks/useAosInit";
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';


const ContactForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  useAOSInit()
  const form = useRef();

  const sendEmail = (data) => {
    emailjs.sendForm('service_pvmroq8', 'template_7hxjdqo', form.current, 'WoZaV_ZGijOfT8x-7')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };
  const onSubmit = data => {
    sendEmail(data);
    console.log(data)
  }

  return (
    <div className="mt-24">
      <div>
        <h1 data-aos="fade-up" data-aos-duration="3000" className="text-primary  mb-7 text-center">Contact Us</h1>
      </div>


      <div className='mt-14 mb-32 w-[85%] mx-auto p-4'>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div data-aos="zoom-in-up" data-aos-duration="3000">
            <Lottie animationData={contact} loop={true} />
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left" data-aos-duration="3000" className="mt-20  ">
            <form  ref={form} onSubmit={handleSubmit(onSubmit)} action="">
              <div className="flex justify-center gap-3">
                <div className="flex flex-col w-full">
                  <label htmlFor="name" className="text-[18px] text-[#787C8B]">Name <span className="text-[#F51843]">*</span></label>
                  <input type="text" id="name" name='from_name' {...register("from_name", { required: true })} className="outline-none border-b border-[#69727D] focus:border-[#D8D9E5] w-full max-w-xs p-1" />
                  {errors.name?.type === 'required' && <p className="text-red-500">Name is required</p>}
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="email" className="text-[18px] text-[#787C8B]">Email <span className="text-[#F51843]">*</span></label>
                  <input type="text" id="email" name='to_email' {...register("to_email", { required: true })} className="outline-none border-b border-[#69727D] focus:border-[#D8D9E5] w-full max-w-xs p-1" />
                  {errors.email?.type === 'required' && <p className="text-red-500 mt-2">Email is required</p>}
                </div>
              </div>

              <div className="flex justify-center gap-3 my-3">
                <div className="flex flex-col w-full">
                  <label htmlFor="phone" className="text-[18px] text-[#787C8B]">Phone <span className="text-[#F51843]">*</span></label>
                  <input type="text" id="phone" name='phone' {...register("phone", { required: true })}  className="outline-none border-b border-[#69727D] focus:border-[#D8D9E5] w-full max-w-xs p-1" />
                  {errors.phone?.type === 'required' && <p className="text-red-500">Phone is required</p>}
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="services" className="text-[18px] text-[#787C8B]">Services<span className="text-[#F51843]">*</span></label>
                  <input type="text" id="phone" name='services' {...register("services", { required: true })}  className="outline-none border-b border-[#69727D] focus:border-[#D8D9E5] w-full max-w-xs p-1" />
                  {errors.services?.type === 'required' && <p className="text-red-500">Services is required</p>}
                </div>                
              </div>

              <div>
                <div className="flex flex-col w-full">
                  <label htmlFor="massage" className="text-[18px] text-[#787C8B]">Message <span className="text-[#F51843]">*</span></label>
                  <textarea cols="5" rows="4" name='message' {...register("message", { required: true })} className="outline-none border-b border-[#69727D] focus:border-[#D8D9E5] w-full p-1"></textarea>
                  {errors.massage?.type === 'required' && <p className="text-red-500">Email is required</p>}
                </div>
              </div>
              <button className="btn text-[17px] font-bold rounded-full bg-[#FF2E57] hover:bg-[#F51843] px-6 text-white mt-6">Send Message</button>
            </form>


          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;