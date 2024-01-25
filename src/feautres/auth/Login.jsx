const Login = () => {
  return (
    <div className="bg-white text-black px-8 py-12">
      <div className="pb-12">
        <span className="text-lg">
          Login in s a member of the people&apos;s party
        </span>
        <span className="block text-sm pt-1">
          Not yet a verified member?{" "}
          <span className="text-green-600">Register</span>
        </span>
      </div>
      <form className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="" className="label">
            Email or Phone number
          </label>
          <input type="text" className="input" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="label">
            Email Address
          </label>
          <input type="text" className="input" />
        </div>
        <div className="bg-green-600 text-white py-3 px-10 col-start-1 col-end-3 w-fit justify-self-center rounded-md">
          Login
        </div>
      </form>
    </div>
  );
};
export default Login;
