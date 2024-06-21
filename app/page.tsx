import { CarouselPage } from "@/components/home/Carousal";
import { GallerySection } from "@/components/home/gallery-section";
import { TempleSection } from "@/components/home/temple-section";
import { VideoPage } from "@/components/home/video";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <CarouselPage />
        <TempleSection />
        <GallerySection />
        <section className="   p-4  ">
          <div>
            <h1 className="flex font-semibold  text-[#f15a24] text-3xl my-5  ">
              Our Services
            </h1>
            <div className="space-y-4">
              <p>
                At Shiv Shakti Mariamman Temple, we offer a range of religious
                services and activities:
              </p>
              <p>
                {" "}
                <span className="font-bold ">Daily Poojas :</span> Experience
                the divine presence through our daily rituals and prayers.
              </p>
              <p>
                <span className="font-bold "> Festivals :</span> Join us in
                celebrating major Hindu festivals with grandeur and devotion.
              </p>
              <p>
                <span className="font-bold ">Community Events :</span>{" "}
                Participate in various cultural and social events that foster
                community spirit.
              </p>
              <p>
                <span className="font-bold "> Spiritual Guidance :</span> Seek
                guidance and blessings from our knowledgeable priests.
              </p>
            </div>
          </div>
          <div>
            <h1 className="flex font-semibold  text-[#f15a24] text-3xl my-5">
              Visit  Us
            </h1>
            <div>
              <p className="leading-8">
                We welcome everyone to visit Shiv Shakti Mariamman Temple,
                whether you are seeking spiritual guidance, wanting to partake
                in our vibrant festivals, or simply looking to find peace and
                solace. Our temple is open to all, providing a sanctuary where
                faith and tradition thrive.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
