import Image from "next/image";
import React from "react";

export const TempleSection = () => {
  return (
    <section className="w-full bg-[#ededed] mx-auto p-10 flex flex-col-reverse   md:flex-row  gap-4 px-10">
      <div className="flex-1">
        <Image
          src={"/logo.jpg"}
          width={600}
          height={600}
          alt="temple photo"
          className="rounded-sm"
        />
      </div>
      <div className="space-y-10 flex-1">
        <h1 className="flex justify-center font-extrabold text-[#f15a24] text-3xl">
          || ॐ शिवशक्ति मारियम्मन ||
        </h1>
        <div>
          <div>
            <p className="leading-8">
              Established in [Year], Shiv Shakti Mariamman Temple has grown to
              become a spiritual cornerstone for the residents of Pipeline Sion
              Koliwada and beyond. Our temple&apos;s history is deeply
              intertwined with the local community, reflecting the faith and
              dedication of generations who have worshipped here. Over the
              years, the temple has evolved, incorporating new traditions and
              expanding its reach, while remaining true to its roots.
            </p>
          </div>
          <div>
            <p className="leading-8">
              Our mission is to provide a sacred space for worship, reflection,
              and community gatherings. We strive to uphold the traditions and
              teachings of our faith, fostering a sense of unity and devotion
              among our followers. Through regular poojas, festivals, and
              community events, we aim to enrich the spiritual lives of our
              devotees and promote the cultural values that bind us together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
