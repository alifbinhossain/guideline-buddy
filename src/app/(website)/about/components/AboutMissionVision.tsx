import React from "react";

const AboutMissionVision = () => {
  return (
    <div className='container  flex flex-col xl:flex-row   items-center justify-center  gap-16 2xl:gap-32 py-20 2xl:py-44'>
      <div className='  text-[#5437CC]  text-center w-fulll  xl:w-[516px]'>
        <h3>Our Mission</h3>
        <p>
          Equipping and empowering mortgage professionals to create faster, more
          accurate, and more accessible pathways to homeownership for everyone
        </p>
      </div>
      <div className='w-full xl:w-[2px] bg-[#5437CC] h-[1px] xl:h-[453px] '></div>
      <div className='  text-[#5437CC] text-center w-full  xl:w-[516px]'>
        <h3>Our Vision</h3>
        <p>
          To lead the way in reshaping the mortgage ecosystem, fostering a
          future where innovation, reliability, and simplicity converge 
        </p>
      </div>
    </div>
  );
};

export default AboutMissionVision;
