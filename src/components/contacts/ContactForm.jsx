import React, { useState } from 'react';
import contact from "../../data/animations/Contact.json"
import Lottie from "lottie-react";
import useAOSInit from "../../hooks/useAosInit";
import { useForm } from 'react-hook-form';


const ContactForm = () => {
  const emptyCredentials = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    message: "",
  };
  const [credentials, setCredentials] = useState(emptyCredentials);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  useAOSInit()

  const onSubmit = (data) => {
    const { email, massage, name, services, phone } = data;
  console.log(data);
  };

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
            <form onSubmit={handleSubmit(onSubmit)} action="">
              <div className="flex justify-center gap-3">
                <div className="flex flex-col w-full">
                  <label htmlFor="name" className="text-[18px] text-[#787C8B]">Name <span className="text-[#F51843]">*</span></label>
                  <input type="text" id="name" {...register("name", { required: true,pattern: /^[A-Za-z]+$/i })} className="outline-none border-b border-[#69727D] focus:border-[#D8D9E5] w-full max-w-xs p-1" />
                  {errors.name?.type === 'required' && <p className="text-red-500">Name is required</p>}
                  {errors.name?.type === 'pattern' && <p className="text-red-500">Please type only valid text  </p>}
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="email" className="text-[18px] text-[#787C8B]">Email <span className="text-[#F51843]">*</span></label>
                  <input type="email" id="email" {...register("email", { required: true,pattern: /^\S+@\S+\.\S+$/ })} className="outline-none border-b border-[#69727D] focus:border-[#D8D9E5] w-full max-w-xs p-1" />
                  {errors.email?.type === 'required' && <p className="text-red-500 mt-2">Email is required</p>}
                  {errors.email?.type === 'pattern' && <p className="text-red-500">Please write a valid email </p>}
                </div>
              </div>

              <div className="flex justify-center gap-3 my-3">
                <div className="flex flex-col w-full">
                  <label htmlFor="phone" className="text-[18px] text-[#787C8B]">Phone <span className="text-[#F51843]">*</span></label>
                  <input type="tel" id="phone" {...register("phone", { required: true,pattern: /^[0-9]+$/ })}  className="outline-none border-b border-[#69727D] focus:border-[#D8D9E5] w-full max-w-xs p-1" />
                  {errors.phone?.type === 'required' && <p className="text-red-500">Phone is required</p>}
                  {errors.phone?.type === 'pattern' && <p className="text-red-500">Please enter only numbers </p>}
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="services" className="text-[18px] text-[#787C8B]">Services<span className="text-[#F51843]">*</span></label>
                  <input type="text" id="phone" {...register("services", { required: true,pattern: /^[A-Za-z]+$/i })}  className="outline-none border-b border-[#69727D] focus:border-[#D8D9E5] w-full max-w-xs p-1" />
                  {errors.services?.type === 'required' && <p className="text-red-500">Services is required</p>}
                  {errors.services?.type === 'pattern' && <p className="text-red-500">Please type only valid text  </p>}
                </div>                
              </div>

              <div>
                <div className="flex flex-col w-full">
                  <label htmlFor="massage" className="text-[18px] text-[#787C8B]">Message <span className="text-[#F51843]">*</span></label>
                  <textarea cols="5" rows="4" {...register("massage", { required: true,pattern: /^[A-Za-z]+$/i })} className="outline-none border-b border-[#69727D] focus:border-[#D8D9E5] w-full p-1"></textarea>
                  {errors.massage?.type === 'required' && <p className="text-red-500">Message is required</p>}
                  {errors.massage?.type === 'pattern' && <p className="text-red-500">Please type only valid text </p>}
                </div>
              </div>

              <input type="submit" value="Send Message" className="btn text-[17px] font-bold rounded-full bg-[#FF2E57] hover:bg-[#F51843] px-6 text-white mt-6"></input>
            </form>


          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;