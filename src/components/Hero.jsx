import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import images dynamically
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/picture2.jpeg";
import hero3 from "../assets/picture3.jpeg";

const slides = [
  { image: hero1, title: "Enjoy Your Dream Time With HotelY Luxury Experience", subtitle: "Luxury Hotel" },
  { image: hero2, title: "Relax in Comfort with Our Premium Amenities", subtitle: "Cozy Rooms" },
  { image: hero3, title: "Experience the Best Hospitality Services", subtitle: "Exceptional Service" },
];

const Hero = () => {
  return (
    <div id="" className="hero-container w-full h-screen relative ">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-screen flex items-center justify-center bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="flex flex-col items-center z-[2] px-8 py-6 text-white text-center space-y-6">
                <div className="hero-text">
                  <small className="text-sm uppercase tracking-wider">{slide.subtitle}</small>
                  <h2 className="text-3xl lg:text-5xl font-extrabold mt-4">{slide.title}</h2>
                </div>
                <button className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 z-[2]">
                  Call Now <span>+27715231720</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
