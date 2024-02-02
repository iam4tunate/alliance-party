import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";

const Register = () => {
  const [isRegistered, setRegistered] = useState(false);

  return (
    <div className="relative text-base">
      {isRegistered && (
        <div className="w-1/2 max-lg:w-full h-screen padX py-12 fixed top-0 left-0 bottom-0 bg-[rgba(0,0,0,0.8)] flex items-center">
          <div className="flex flex-col text-center items-center gap-y-2 w-[60%] lg:w-[80%] max-sm:w-full mx-auto bg-white rounded-md py-6 px-6">
            <MdVerified className="text-7xl text-primary" />
            <span className="text-xl font-Heebo500">
              Registration Successfull
            </span>
            <span className="">
              A text message will be sent to your phone number and an email to
              rmail inbox
            </span>
            <Link to="/">
              <div className="text-secondary pt-2">Go to homepage</div>
            </Link>
          </div>
        </div>
      )}
      <div className="text-black px-8 py-12">
        <div className="font-Heebo600 text-center text-2xl font-bold pb-2 uppercase text-primary">
        kálésanwá socio-POLITICAL Group REGISTRATION FORM
        </div>
        <div className="pb-10 flex max-sm:flex-col text-left items-center max-sm:items-start justify-between gap-y-2">
          <span className="text-lg max-sm:text-base">
            Register to become a verified member
          </span>
          <Link to="/">
            <span className="text-base text-secondary font-Heebo500 flex items-center gap-x-1">
              <BsArrowLeft />
              <span>Go Back</span>
            </span>
          </Link>
          {/* <span className="block text-sm pt-1">
          Already a verified member?{" "}
          <span className="text-green-600">Log in</span>
        </span> */}
          {/* <span className="block text-sm pt-1 text-green-500">
          After registration you will be sent your membership id as a verified
          member of this great party
        </span> */}
        </div>
        <form className="grid grid-cols-2 max-lg:grid-cols-1 gap-x-6 gap-y-8">
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              Surname
            </label>
            <input type="text" className="input" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              First name
            </label>
            <input type="text" className="input" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              Middle name (optional)
            </label>
            <input type="text" className="input" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              Gender
            </label>
            <select name="" id="" className="input">
              <option value="#">select gender</option>
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              Phone number
            </label>
            <input type="text" className="input" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              Date of birth
            </label>
            <input type="date" className="input" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              Contact Address
            </label>
            <input type="text" className="input" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              Email Address
            </label>
            <input type="text" className="input" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              State
            </label>
            <input type="text" className="input" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              Local Government
            </label>
            <input type="text" className="input" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              Ward
            </label>
            <input type="text" className="input" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              Polling unit
            </label>
            <input type="text" className="input" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              Office Held
            </label>
            <select name="" id="" className="input cursor-pointer">
              <option value="#">Choosed office</option>
              <option value="">chairman</option>
              <option value="">Vice Chairman</option>
              <option value="">Agent</option>
              <option value="">Member</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              Do you have a voter&apos;s card
            </label>
            <div className="flex items-center gap-x-6 mt-2">
              <div className="flex items-center gap-x-1">
                <input type="radio" id="yes" name="votersCard" value="YES" />
                <label htmlFor="yes">Yes</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input type="radio" id="no" name="votersCard" value="NO" />
                <label htmlFor="no">No</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              Voter&apos;s card ID
            </label>
            <input type="text" className="input" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              NIN
            </label>
            <input type="text" className="input" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="label">
              Profile image
            </label>
            <input type="file" className="input" />
          </div>
          <div
            onClick={() => setRegistered(true)}
            className="bg-primary text-white py-3 px-10 col-start-1 col-end-3 max-lg:col-end-2 w-fit justify-self-center rounded-md cursor-pointer"
          >
            Register
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
