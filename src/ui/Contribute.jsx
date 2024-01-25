import { Link } from "react-router-dom";

const Contribute = () => {
  return (
    <div className="bg-primary py-12">
      <div className="maxW padX flex max-md:flex-col max-md:gap-y-8 items-center max-lg:items-start justify-between text-white">
        <div className="flex flex-col gap-y-4 text-5xl max-lg:text-4xl font-DMSefif w-[60%] max-md:w-[90%] max-sm:w-full">
          <span className="leading-[1.1] max-sm:leading-[1.10]">
            Engage and actively contribute to fortifying the strength of our
            esteemed political group.
          </span>
        </div>
        <Link to="/auth/register">
          <button className="bg-secondary text-white text-xl font-Heebo600 px-8 py-4 max-lg:px-10 outline-none">
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Contribute;
