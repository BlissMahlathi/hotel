import { useState } from "react";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real application, you would send form data to the server here
  };

  return (
    <div id="reservations" className="py-12 px-6 lg:px-16 bg-[#f7f7f7]">
      <div className="text-center space-y-4 mb-12">
        <small className="text-lg font-semibold text-[#9d7e54] uppercase tracking-wide">
          Reservations
        </small>
        <h2 className="text-4xl font-bold text-[#1e1e1e]">
          Book Your Stay at HOTEL<span className="text-[#9d7e54]">Y</span>
        </h2>
      </div>

      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg border border-[#eaeaea]">
        {isSubmitted ? (
          <div className="text-center">
            <h3 className="text-2xl text-[#1e1e1e] mb-4">
              Thank You for Your Reservation!
            </h3>
            <p className="text-lg text-gray-600">
              Your reservation has been successfully submitted. We will contact
              you shortly for confirmation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9d7e54]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9d7e54]"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9d7e54]"
              />
            </div>

            <div>
              <label
                htmlFor="roomType"
                className="block text-sm font-medium text-gray-700"
              >
                Room Type
              </label>
              <select
                id="roomType"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9d7e54]"
              >
                <option value="">Select Room Type</option>
                <option value="Single">Single Room</option>
                <option value="Double">Double Room</option>
                <option value="Suite">Suite</option>
              </select>
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="checkIn"
                  className="block text-sm font-medium text-gray-700"
                >
                  Check-in Date
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9d7e54]"
                />
              </div>

              <div className="w-1/2">
                <label
                  htmlFor="checkOut"
                  className="block text-sm font-medium text-gray-700"
                >
                  Check-out Date
                </label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9d7e54]"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full py-3 px-4 mt-6 text-white bg-[#9d7e54] rounded-md hover:bg-[#7c5a38] transition"
              >
                Confirm Reservation
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Reservation;
