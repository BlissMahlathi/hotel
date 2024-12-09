import AboutImg from "../assets/about-one.png";

const About = () => {
  return (
    <div
      id="about"
      className="section flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-12 gap-8"
    >
      {/* Image Section */}
      <div className="flex w-full lg:w-1/2 items-center justify-center">
        <img
          src={AboutImg}
          className="w-[90%] h-auto object-cover"
          alt="About HotelY"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col space-y-6 text-center lg:text-left">
        <span className="text-lg font-medium text-[#9d7e54]">HotelY</span>
        <h2 className="text-[32px] lg:text-[40px] font-bold text-[#1e1e1e]">
          Where Elegance Meets{" "}
          <span className="text-[#9d7e54]">Excellence</span>
        </h2>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-[#9d7e54] to-[#f7e4c3] shadow-lg rounded-lg p-6 w-[250px] text-center">
            <p className="text-xl font-bold text-[#1e1e1e]">350+</p>
            <span className="text-[#555]">Awards Won</span>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-[#8b0000] to-[#9d7e54] shadow-lg rounded-lg p-6 w-[250px] text-center">
            <p className="text-xl font-bold text-[#1e1e1e]">250K+</p>
            <span className="text-[#555]">Visitors Annually</span>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-r from-[#d9534f] via-[#9d7e54] to-[#f7e4c3] shadow-lg rounded-lg p-6 w-[250px] text-center">
            <p className="text-xl font-bold text-[#1e1e1e]">30K+</p>
            <span className="text-[#555]">Events Hosted</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
