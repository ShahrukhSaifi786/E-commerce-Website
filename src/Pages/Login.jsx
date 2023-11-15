import React from "react";

const Login = () => {
  return (
    <section className="min-h-[500px] w-full py-10 px-3 bg-gradient-to-b from-fuchsia-100 to-white  flex items-center justify-center">
      <div className="p-10 bg-white flex flex-col gap-5 border max-w-full">
        <h1 className="lg:text-3xl md:text-2xl text-xl mb-2 sm:font-bold font-semibold ">Sign Up</h1>
        <input
          type="text"
          className="border-2 border outline-none sm:px-4 px-2 sm:py-3 py-2"
          placeholder="Enter Name"
        />
        <input
          type="text"
          className="border-2 border outline-none sm:px-4 px-2 sm:py-3 py-2"
          placeholder="Enter Password"
        />
        <input
          type="text"
          className="border-2 border outline-none sm:px-4 px-2 sm:py-3 py-2"
          placeholder="Enter G-mail"
        />
        <button className="bg-[#ff4141] sm:py-3 py-2 rounded-xl sm:font-bold font-semibold text-white cursor-pointer ">
          Continue{" "}
        </button>
        <p className="">
          Already have an account?{" "}
          <span className="text-[17px] font-bold text-[#ff4141] cursor-pointer">
            Login here
          </span>
        </p>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="inp" />
          <label htmlFor="inp">
            <span>
              By continuing, I agree to the terms of use & privacy policy.
            </span>
          </label>
        </div>
      </div>
    </section>
  );
};

export default Login;
