
import contact from "../../data/animations/Contact.json"
import Lottie from "lottie-react";

const ContactForm = () => {
  return (
    <div >
     <div><h1 data-aos="fade-up" className="text-primary  mb-7 text-center">Contact Us</h1></div>
     
     
      <div className='mt-14 mb-32 w-[85%] mx-auto  p-4'>

        <div  className='grid grid-cols-1 md:grid-cols-2'>
         <div data-aos="zoom-in-up">
         <Lottie animationData={contact} loop={true} />
         </div>

          {/* Contact Form */}
          <div data-aos="fade-left" className="mt-20  ">
            <form action="">
              <div className="flex justify-center gap-3">
                <div className="flex flex-col w-full">
                  <label htmlFor="name" className="text-[18px] text-[#787C8B]">Name <span className="text-[#F51843]">*</span></label>
                  <input type="text" id="name" className="outline-none border-b border-[#69727D] focus:border-[#D8D9E5] w-full max-w-xs p-1" />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="email" className="text-[18px] text-[#787C8B]">Email <span className="text-[#F51843]">*</span></label>
                  <input type="text" id="email" className="outline-none border-b border-[#69727D] focus:border-[#D8D9E5] w-full max-w-xs p-1" />
                </div>
              </div>

              <div className="flex justify-center gap-3 my-3">
                <div className="flex flex-col w-full">
                  <label htmlFor="phone" className="text-[18px] text-[#787C8B]">Phone <span className="text-[#F51843]">*</span></label>
                  <input type="number" id="phone" className="outline-none border-b border-[#69727D] focus:border-[#D8D9E5] w-full max-w-xs p-1" />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="services" className="text-[18px] text-[#787C8B]">Services <span className="text-[#F51843]">*</span></label>
                  <input type="text" id="services" className="outline-none border-b border-[#69727D] focus:border-[#D8D9E5] w-full max-w-xs p-1" />
                </div>
              </div>

              <div>
                <div className="flex flex-col w-full">
                  <label htmlFor="phone" className="text-[18px] text-[#787C8B]">Message <span className="text-[#F51843]">*</span></label>
                  <textarea cols="5" rows="4" className="outline-none border-b border-[#69727D] focus:border-[#D8D9E5] w-full p-1"></textarea>
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