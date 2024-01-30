import Commitment from "./Commitment";
import Committee from "./Committee";
import Contribute from "./Contribute";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <div className="relative z-10 mb-[20rem] max-md:mb-[25rem] max-sm:mb-[30rem]">
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
