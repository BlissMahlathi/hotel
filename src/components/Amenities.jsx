import gyn from "../assets/gym.jpg";
import eat from "../assets/rest.jpg";
import pool from "../assets/pool.jpg";
import image from "../assets/image.png";
import wifi from "../assets/wifi.png";
import park from "../assets/park.png";

const Amenities = () => {
  return (
    <div id="" className=" px-6 lg:px-16 py-12 bg-[#fdfdfd]">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <small className="text-lg font-semibold text-[#9d7e54] uppercase tracking-wide">
          Our Facilities
        </small>
        <h2 className="text-[32px] lg:text-[40px] font-bold text-[#1e1e1e]">
          Available <span className="text-[#9d7e54]">Amenities</span>
        </h2>
      </div>

      {/* Amenities List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Amenity 1 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#eaeaea] p-6 space-y-6 w-[320px]">
          <div className="h-32 bg-cover bg-center rounded-t-lg">
            <img
              src={pool}
              alt="Pool"
              className="object-cover w-full h-full rounded-t-lg"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#1e1e1e] text-center">
              Swimming Pool
            </h3>
            <p className="text-[#555] text-center">
              Enjoy a relaxing time in our well-maintained pool.
            </p>
          </div>
        </div>

        {/* Amenity 2 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#eaeaea] p-6 space-y-6 w-[320px]">
          <div className="h-32 bg-cover bg-center rounded-t-lg">
            <img
              src={gyn}
              alt="Gym"
              className="object-cover w-full h-full rounded-t-lg"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#1e1e1e] text-center">
              Fitness Center
            </h3>
            <p className="text-[#555] text-center">
              Stay fit and healthy with our fully equipped gym.
            </p>
          </div>
        </div>

        {/* Amenity 3 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#eaeaea] p-6 space-y-6 w-[320px]">
          <div className="h-32 bg-cover bg-center rounded-t-lg">
            <img
              src={eat}
              alt="Restaurant"
              className="object-cover w-full h-full rounded-t-lg"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#1e1e1e] text-center">
              Restaurant
            </h3>
            <p className="text-[#555] text-center">
              Savor delicious meals from our top-notch restaurant.
            </p>
          </div>
        </div>

        {/* Amenity 4 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#eaeaea] p-6 space-y-6 w-[320px]">
          <div className="h-32 bg-cover bg-center rounded-t-lg">
            <img
              src={image}
              alt="Spa"
              className="object-cover w-full h-full rounded-t-lg"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#1e1e1e] text-center">
              Spa & Wellness
            </h3>
            <p className="text-[#555] text-center">
              Relax and rejuvenate at our luxury spa.
            </p>
          </div>
        </div>

        {/* Amenity 5 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#eaeaea] p-6 space-y-6 w-[320px]">
          <div className="h-32 bg-cover bg-center rounded-t-lg">
            <img
              src={wifi}
              alt="Wi-Fi"
              className="object-cover w-full h-full rounded-t-lg"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#1e1e1e] text-center">
              Free Wi-Fi
            </h3>
            <p className="text-[#555] text-center">
              Stay connected with our fast and free Wi-Fi.
            </p>
          </div>
        </div>

        {/* Amenity 6 */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#eaeaea] p-6 space-y-6 w-[320px]">
          <div className="h-32 bg-cover bg-center rounded-t-lg">
            <img
              src={park}
              alt="Parking"
              className="object-cover w-full h-full rounded-t-lg"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#1e1e1e] text-center">
              Free Parking
            </h3>
            <p className="text-[#555] text-center">
              Enjoy complimentary parking during your stay.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
