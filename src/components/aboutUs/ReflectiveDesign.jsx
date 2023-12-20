import React from "react";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import useAOSInit from "../../hooks/useAosInit";
import { Link as ScrollLink } from "react-scroll";
const ReflectiveDesign = () => {
 useAOSInit()
 const imge = "https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D"

 const imgeStyle = {
     backgroundImage: `url(${imge})`,
     backgroundRepeat: 'no-repeat',
     backgroundSize: 'cover',
 };
  return (
    <div style={imgeStyle}   className="pt-20 pb-10" >
    <h1  data-aos="fade-up" data-aos-duration="3000" className="text-primary text-center ">About Us</h1>
    <div className="hero my-16  mx-auto ">
      <div className="hero-content flex flex-col lg:flex-row justify-between">
      <div  data-aos="zoom-in" data-aos-duration="3000" className="md:w-[50%] ">
                        <Player
                            autoplay
                            speed={1.5}
                            loop
                            src="https://lottie.host/49badd09-94c8-4349-a07d-2a36a14faf29/g5G86OBuA1.json"
                            style={{ height: "full", width: "full" }}
                        >
                            <Controls

                                buttons={[
                                    "play",
                                    "repeat",
                                    "frame",
                                    "debug",
                                    "snapshot",
                                    "background"
                                ]}
                            />
                        </Player>
                    </div>
          <div data-aos="fade-left" data-aos-duration="3000" className="md:w-[50%] ">
            <h1 className="text-secendary  ">
            About Royel Advertising Redefining Excellence, Shaping Futures.
            </h1>
            <p className="py-6 text-slate-500 text-lg">
            At Royel Advertising, we are more than just a marketing agency; we are architects of success stories. With a passion for creativity and a commitment to excellence, we embark on every project with the goal of elevating brands to new heights. Our dedicated team of experts thrives on innovation, employing cutting-edge strategies to ensure your message not only resonates but leaves a lasting impact.
            </p>
            <ScrollLink
            to="Contact Us"
            href="#"
            smooth={true}
            duration={500}
          >
            <button type="button" className="btn-navbar mt-4 flex justify-center items-center md:block">
              Let's Talk
            </button>
          </ScrollLink>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReflectiveDesign;
