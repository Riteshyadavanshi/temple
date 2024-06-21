import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="space-y-10 p-4 bg-[#ededed]">
      <div className=" md:mx-[25%] space-y-10 ">
        <div>
          <h1 className="flex font-semibold  text-[#f15a24] text-3xl my-5">
            About temple
          </h1>
          <div>
            <video autoPlay muted loop className="md:w-[600px] md:h-[400px]">
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="space-y-5 mt-2">
            <p className="leading-2">
              Located in the heart of Pipeline Sion Koliwada, Shiv Shakti
              Mariamman Temple stands as a beacon of spiritual{" "}
            </p>
            <p className="leading-2">
              {" "}
              solace and cultural heritage. Our temple is dedicated to the
              worship of Goddess Mariamman,
            </p>
            <p className="leading-2">
              {" "}
              revered for her power to cure illnesses and bestow blessings upon
              her devotees.
            </p>
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="flex justify-center font-extrabold text-[#f15a24] text-3xl">
            || ॐ शिवशक्ति मारियम्मन मंदिर||
          </h1>
          <div>
            <Image
              src={"/logo.jpg"}
              width={600}
              height={600}
              alt="logo"
              className="md:w-[600px] md:h-[400px] rounded-sm"
            />
          </div>
          <div>
            <h1 className="flex font-semibold  text-[#f15a24] text-3xl my-5">
               History
            </h1>
            <div>
              <p className="leading-8">
                Established in [Year], Shiv Shakti Mariamman Temple has grown to
                become a spiritual cornerstone for the residents of Pipeline
                Sion Koliwada and beyond. Our temple&apos;s history is deeply
                intertwined with the local community, reflecting the faith and
                dedication of generations who have worshipped here. Over the
                years, the temple has evolved, incorporating new traditions and
                expanding its reach, while remaining true to its roots.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
