import testi1 from "../assets/testi-01.jpg";
import testi2 from "../assets/testi-04.jpg";
import testi3 from "../assets/testi-03.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Business Owner",
      quote:
        "This service has been a game-changer for my business. Highly recommended!",
      image: testi3,
    },
    {
      name: "Jane Smith",
      role: "Freelancer",
      quote:
        "The team was incredibly professional, and the result exceeded my expectations.",
      image: testi1,
    },
    {
      name: "Joy Wilson",
      role: "Entrepreneur",
      quote:
        "I am beyond impressed with the quality of work and attention to detail.",
      image: testi2,
    },
  ];

  return (
    <div id="testimonials" className="px-6 lg:px-16 py-12 bg-[#fdfdfd]">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <small className="text-lg font-semibold text-[#9d7e54] uppercase tracking-wide">
          Client Testimonials
        </small>
        <h2 className="text-[32px] lg:text-[40px] font-bold text-[#1e1e1e]">
          What Our Clients <span className="text-[#9d7e54]">Say</span>
        </h2>
      </div>

      {/* Testimonials Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#eaeaea] p-6 space-y-4"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-[#1e1e1e]">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-[#555]">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-[#555] italic text-center">
              {testimonial.quote}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
