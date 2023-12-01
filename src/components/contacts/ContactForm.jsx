import { GrLocation } from "react-icons/gr";
import { CiMobile4 } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";

const ContactForm = () => {
  return (
    <div className='mt-10 mb-20 w-[80%] mx-auto'>
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
            <div className="flex gap-3">
              <div className="flex flex-col">
                <label htmlFor="" className="text-[18px] text-[#787C8B]">Name <span className="text-[#F51843]">*</span></label>
                <input type="text" class="form-input px-4 py-3 border-b border-[#69727D]" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-[18px] text-[#787C8B]">Email <span className="text-[#F51843]">*</span></label>
                <input type="email" class="form-input px-4 py-3 border-b border-[#69727D]" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;