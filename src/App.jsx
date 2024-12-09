import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Rooms from "./components/Rooms";
import Amenities from "./components/Amenities";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Reservation from "./pages/Reservation";

const App = () => {
  return (
    <>
      {/* Static components visible across all pages */}
      <Nav />
      <Hero />
      <About />
      <Services />
      <Rooms />
      <Amenities />
      <Reservation />
      <Testimonials />
      <Footer />

      {/* Define Routes for different pages */}
    </>
  );
};

export default App;
