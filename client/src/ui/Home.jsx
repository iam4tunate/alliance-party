import Commitment from "./Commitment";
import Committee from "./Committee";
import Contribute from "./Contribute";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <div className="relative z-10 mb-[17rem] max-lg:mb-[20rem] max-md:mb-[22rem] max-sm:mb-[33rem]">
        <Navbar />
        <Hero />
        <Commitment />
        <Committee />
        <Contribute />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
