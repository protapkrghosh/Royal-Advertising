import { GrLocation } from "react-icons/gr";
import { CiMobile4 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";


const ContactForm = () => {
  return (
    <div className='mt-14 mb-32 w-[85%] mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
          <div>
            <p className='uppercase font-semibold'>Contact Us</p>
            <p className='text-6xl font-bold mt-3'>Have <br /> Questions? Get <br /> in Touch!</p>
            <p className='text-[18px] text-[#787C8B] mb-6 mt-10'>Get in touch with us for all your digital <br /> marketing needs. Our team of experts is ready <br /> to help you reach your online goals.</p>
          </div>

          <div className="space-y-4 ml-3">
            <div className='flex'>
              <GrLocation className="text-[22px] text-[#9D6FFF] mr-3" />
              <p className='text-[18px] text-[#787C8B]'>Plot No.10, Pratap Nagar, Tedhi Pulia Ring <br /> Road, Vikas Nagar, Lucknow, Uttar Pradesh <br /> – 226022</p>
            </div>

            <div className='flex'>
              <CiMobile4 className="text-2xl text-[#9D6FFF] mr-3" />
              <p className='text-[20px] font-bold'>+91-8858230920</p>
            </div>

            <div className='flex ml-1'>
              <TfiEmail className="text-[18px] text-[#9D6FFF] mr-3" />
              <p className='text-[18px] text-[#787C8B]'>Info@reflectivedesign.in</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
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
  );
};

export default ContactForm;