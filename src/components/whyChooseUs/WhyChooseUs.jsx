import React from "react";

const WhyChooseUs = () => {
  return (
    <div class="relative w-full h-[1500px] lg:h-[450px] overflow-hidden">
      <div>
        <img
          src="https://demo.7iquid.com/salepush/wp-content/uploads/2023/11/BG6.jpg"
          alt="Main Image"
          class="w-full h-full object-cover absolute top-0 left-0"
        />
        <img
          src="https://demo.7iquid.com/salepush/wp-content/uploads/2023/11/Ellipse-1.png"
          alt="Left Side Image"
          class="h-full object-cover absolute top-0 left-0"
        />
        <img
          src="https://demo.7iquid.com/salepush/wp-content/uploads/2023/11/Ellipse-2.png"
          alt="Right Side Image"
          class="h-full object-cover absolute top-0 right-0"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col lg:flex-row justify-between gap-y-20 lg:gap-y-0 lg:gap-x-10 hero px-10">
        <div>
          <img
            src="https://i.ibb.co/ys8phbX/seo-4.jpg"
            className="w-[80px] h-[80px] mx-auto mb-5 rounded-full"
            alt=""
          />
          <h4 className="text-2xl mb-5">Comprehensive Digital Audit</h4>
          <p className="tracking-wide">
            Conducted a thorough analysis of XYZ Electronics' existing digital
            presence, identifying strengths, weaknesses, opportunities, and
            threats.
          </p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/GtgY2hR/marketing-set-3.jpg"
            className="w-[80px] h-[80px] mx-auto mb-5 rounded-full"
            alt=""
          />
          <h4 className="text-2xl mb-5">Customized Strategy Development</h4>
          <p>
            Tailored a comprehensive digital marketing strategy, encompassing
            SEO, PPC advertising, social media marketing, and content
            optimization, aligned with XYZ Electronics' business objectives.
          </p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/ZTnNKsT/5287968.jpg"
            className="w-[80px] h-[80px] mx-auto mb-5 rounded-full"
            alt=""
          />
          {/* result */}
          <h4 className="text-2xl mb-5">Revamped Website and SEO Optimization</h4>
          <p>
            Implemented a website redesign for improved user experience and
            navigation. Conducted on-page and off-page SEO optimizations to
            enhance search engine rankings.
          </p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/rwMTjMm/3358839.jpg"
            className="w-[80px] h-[80px] mx-auto mb-5 rounded-full"
            alt=""
          />
          {/* success */}
          <h4 className="text-2xl mb-5">Strategic Social Media Campaigns</h4>
          <p>
            Launched targeted social media campaigns across platforms to
            increase brand awareness, engage the audience, and drive traffic to
            the website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
