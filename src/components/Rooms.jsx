import { MdArrowForward } from "react-icons/md";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg"; // Add more images for the other cards
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";

const Rooms = () => {
  return (
    <div id="rooms" className=" flex flex-col px-6 lg:px-16 py-12 space-y-12 bg-[#fdfdfd]">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <small className="text-lg font-semibold text-[#9d7e54] uppercase tracking-wide">
          Luxury Suites
        </small>
        <h2 className="text-[32px] lg:text-[40px] font-bold text-[#1e1e1e]">
          Our Best <span className="text-[#9d7e54]">Rooms</span>
        </h2>
      </div>

      {/* Rooms List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Room Card 1 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#eaeaea] p-6 space-y-6 w-[320px] h-[450px]">
          <div
            className="h-32 bg-cover bg-center rounded-t-lg"
            style={{ backgroundImage: `url(${one})` }}
          >
            <button className="bg-[#9d7e54]  text-white py-1 px-4 rounded-full">
              Junior Suite
            </button>
          </div>

          <div className="space-y-4">
            <div className="text-center">
              <p className="text-lg font-semibold text-[#9d7e54]">R250/N</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#1e1e1e] text-center">
                Junior Suite
              </h3>
              <p className="text-[#555] text-center">- Daily Cleaning</p>
              <p className="text-[#555] text-center">- House Service</p>
              <p className="text-[#555] text-center">- Housekeeping</p>
              <p className="text-[#555] text-center">- Wifi & Parking</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-[#9d7e54] text-white px-2 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#8b6c4b] transition-colors duration-300">
              Book Now <MdArrowForward className="text-xl" />
            </button>
          </div>
        </div>

        {/* Room Card 2 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#eaeaea] p-6 space-y-6 w-[320px] h-[450px]">
          <div
            className="h-32 bg-cover bg-center rounded-t-lg"
            style={{ backgroundImage: `url(${two})` }}
          >
            <button className="bg-[#9d7e54] text-white py-1 px-4 rounded-full">
              Presidential Suite
            </button>
          </div>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-lg font-semibold text-[#9d7e54]">R500/N</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#1e1e1e] text-center">
                Presidential Suite
              </h3>
              <p className="text-[#555] text-center">- Daily Cleaning</p>
              <p className="text-[#555] text-center">- House Service</p>
              <p className="text-[#555] text-center">- Private Pool</p>
              <p className="text-[#555] text-center">- Wifi & Parking</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-[#9d7e54] text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#8b6c4b] transition-colors duration-300">
              Book Now <MdArrowForward className="text-xl" />
            </button>
          </div>
        </div>

        {/* Room Card 3 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#eaeaea] p-6 space-y-6 w-[320px] h-[450px]">
          <div
            className="h-32 bg-cover bg-center rounded-t-lg"
            style={{ backgroundImage: `url(${three})` }}
          >
            <button className="bg-[#9d7e54] text-white py-1 px-4 rounded-full">
              Royal Suite
            </button>
          </div>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-lg font-semibold text-[#9d7e54]">R450/N</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#1e1e1e] text-center">
                Royal Suite
              </h3>
              <p className="text-[#555] text-center">- Daily Cleaning</p>
              <p className="text-[#555] text-center">- House Service</p>
              <p className="text-[#555] text-center">- Private Balcony</p>
              <p className="text-[#555] text-center">- Wifi & Parking</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-[#9d7e54] text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#8b6c4b] transition-colors duration-300">
              Book Now <MdArrowForward className="text-xl" />
            </button>
          </div>
        </div>

        {/* Room Card 4 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#eaeaea] p-6 space-y-6 w-[320px] h-[450px]">
          <div
            className="h-32 bg-cover bg-center rounded-t-lg"
            style={{ backgroundImage: `url(${four})` }}
          >
            <button className="bg-[#9d7e54] text-white py-1 px-4 rounded-full">
              Executive Suite
            </button>
          </div>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-lg font-semibold text-[#9d7e54]">R350/N</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#1e1e1e] text-center">
                Executive Suite
              </h3>
              <p className="text-[#555] text-center">- Daily Cleaning</p>
              <p className="text-[#555] text-center">- House Service</p>
              <p className="text-[#555] text-center">- Kitchenette</p>
              <p className="text-[#555] text-center">- Wifi & Parking</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-[#9d7e54] text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#8b6c4b] transition-colors duration-300">
              Book Now <MdArrowForward className="text-xl" />
            </button>
          </div>
        </div>

        {/* Room Card 5 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#eaeaea] p-6 space-y-6 w-[320px] h-[450px]">
          <div
            className="h-32 bg-cover bg-center rounded-t-lg"
            style={{ backgroundImage: `url(${five})` }}
          >
            <button className="bg-[#9d7e54] text-white py-1 px-4 rounded-full">
              Family Suite
            </button>
          </div>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-lg font-semibold text-[#9d7e54]">R300/N</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#1e1e1e] text-center">
                Family Suite
              </h3>
              <p className="text-[#555] text-center">- Daily Cleaning</p>
              <p className="text-[#555] text-center">- House Service</p>
              <p className="text-[#555] text-center">- Extra Bed</p>
              <p className="text-[#555] text-center">- Wifi & Parking</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-[#9d7e54] text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#8b6c4b] transition-colors duration-300">
              Book Now <MdArrowForward className="text-xl" />
            </button>
          </div>
        </div>

        {/* Room Card 6 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#eaeaea] p-6 space-y-6 w-[320px] h-[450px]">
          <div
            className="h-32 bg-cover bg-center rounded-t-lg"
            style={{ backgroundImage: `url(${six})` }}
          >
            <button className="bg-[#9d7e54] text-white py-1 px-4 rounded-full">
              Budget Suite
            </button>
          </div>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-lg font-semibold text-[#9d7e54]">R200/N</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#1e1e1e] text-center">
                Budget Suite
              </h3>
              <p className="text-[#555] text-center">- Daily Cleaning</p>
              <p className="text-[#555] text-center">- House Service</p>
              <p className="text-[#555] text-center">- Wifi</p>
              <p className="text-[#555] text-center">- Parking</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-[#9d7e54] text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-[#8b6c4b] transition-colors duration-300">
              Book Now <MdArrowForward className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
