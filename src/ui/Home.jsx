import Commitment from "./Commitment";
import Committee from "./Committee";
import Contribute from "./Contribute";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Partners from "./Partners";
import Statistics from "./Statistics";
import Upcoming from "./Upcoming";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Commitment />
      <Statistics />
      <Committee />
      <Contribute />
      <Partners />
      <Upcoming />
      <Footer />
    </div>
  );
};
export default Home;
