import {
  MdHotel,
  MdRoomService,
  MdRestaurantMenu,
  MdFitnessCenter,
} from "react-icons/md";

const Services = () => {
  const services = [
    {
      icon: <MdHotel className="text-5xl text-[#9d7e54] mb-4 hover-icon" />,
      title: "Basic Facilities",
      details: [
        "Reception / Front Desk",
        "Room Services",
        "Housekeeping",
        "WIFI & Parking",
      ],
    },
    {
      icon: (
        <MdRoomService className="text-5xl text-[#9d7e54] mb-4 hover-icon" />
      ),
      title: "Room Amenities",
      details: ["Comfortable Bedding", "Bedroom and Pool", "TV & AC", "Bar"],
    },
    {
      icon: (
        <MdRestaurantMenu className="text-5xl text-[#9d7e54] mb-4 hover-icon" />
      ),
      title: "Dining Options",
      details: [
        "Restaurant Cafe",
        "Bar & Lounge",
        "Cafe & Canteen",
        "Room Service",
      ],
    },
    {
      icon: (
        <MdFitnessCenter className="text-5xl text-[#9d7e54] mb-4 hover-icon" />
      ),
      title: "Special Features",
      details: ["Custom Rooms", "Soccer Ground", "Gym"],
    },
  ];

  return (
    <div id="services" className="lg:section px-6 lg:px-16 py-12 space-y-12 bg-[#fdfdfd]">
      {/* Header */}
      <div className="text-center space-y-4">
        <small className="text-lg font-semibold text-[#9d7e54] uppercase tracking-wide">
          Facilities
        </small>
        <h2 className="text-[32px] lg:text-[40px] font-bold text-[#1e1e1e]">
          Our Best <span className="text-[#9d7e54]">Services</span>
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center border border-[#eaeaea] hover:shake-icon"
          >
            {/* Icon */}
            {service.icon}
            {/* Title */}
            <h3 className="text-xl font-medium text-[#1e1e1e] mb-4">
              {service.title}
            </h3>
            {/* Details */}
            <ul className="text-[#555] space-y-2">
              {service.details.map((detail, i) => (
                <li key={i}>- {detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
