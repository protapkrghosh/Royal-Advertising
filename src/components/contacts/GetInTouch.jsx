import { IoIosArrowDown } from "react-icons/io";
import useAOSInit from "../../hooks/useAosInit";

const GetInTouch = () => {
  useAOSInit()
  return (
    <div >
      {/* Section Heading */}
      <div  className="flex flex-col justify-center items-center">
        <IoIosArrowDown className="text-2xl" />
      </div>

      <div data-aos="fade-left" data-aos-duration="3000" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 gap-10">
        {/* Email */}
        <div className="text-center">
          <div className="flex justify-center">
            <img src="https://reflectivedesign.in/wp-content/uploads/2023/03/email.png" alt="Email Icon" />
          </div>
          <h3 className="text-2xl font-bold my-4">Email</h3>
          <a href="https://mail.google.com" className="text-[17px] text-[#787C8B] hover:text-[#36325D]">info@refletivedesign.in</a> <br />
          <a href="https://mail.google.com" className="text-[17px] text-[#787C8B] hover:text-[#36325D]">support@reflectivedesign.in</a>
        </div>

        {/* Email */}
        <div className="text-center relative">
          <div className="flex justify-center">
            <img src="https://reflectivedesign.in/wp-content/uploads/2021/11/map.svg" alt="Address Icon" />
          </div>
          <h3 className="text-2xl font-bold my-4">Address</h3>
          <p className="text-[17px] text-[#787C8B] mb-1">Plot No.10, Pratap Nagar, Tedhi Pulia Ring Road, Vikas Nagar, Lucknow, Uttar Pradesh – 226022</p>
          <a href="" className="text-[17px] text-[#787C8B] hover:text-[#36325D] border-b-2 hover:border-b-0 border-[#787C8B] p-1">Check Location</a>
        </div>

        {/* Get In Touch */}
        <div className="text-center">
          <div className="flex justify-center">
            <img src="https://reflectivedesign.in/wp-content/uploads/2021/11/telephone.svg" alt="Telephone Icon" />
          </div>
          <h3 className="text-2xl font-bold my-4">Get In Touch</h3>
          <p className="text-[17px] text-[#787C8B]">+91-8858230920</p>
          <p className="text-[17px] text-[#787C8B]">+91-8858130920</p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
