import { Link } from "react-router-dom";

const Contribute = () => {
  return (
    <div className="bg-primary py-16 max-sm:py-8">
      <div className="maxW padX flex max-md:flex-col max-md:gap-y-8 items-center max-lg:items-start justify-between text-white">
        <div className="flex flex-col gap-y-4 text-4xl max-sm:text-3xl font-Heebo500 w-[60%] max-md:w-[90%] max-sm:w-full">
          <span className="leading-[1.2] max-sm:leading-[1.3]">
            Engage and actively contribute to fortifying the strength of our
            esteemed political group.
          </span>
        </div>
        <Link to="/auth/register">
          <button className="bg-secondary text-white text-xl font-Heebo600 px-6 py-4 max-lg:px-10 outline-none">
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Contribute;
