"use client"
// import Layout from "@/components/layout"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react";
import Layout from "../components/checkoutLayout"
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

export default function MyProfile() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Layout headName={"My account"}>
      <div className="  border-[.4px] m-4  border-[#edebeb] mx-auto px-4 py-8">
        {/* Page Header */}


        <div className="grid md:grid-cols-2 gap-12  mx-auto">
          {/* Login Form */}
          <div className="">
            <h2 className="text-2xl  font-bold text-gray-800 mb-6">Login</h2>
            <div className="bg-white h-[23rem] p-8 rounded-lg  border border-gray-200">
              <form className="space-y-6">
                <div>
                  <label htmlFor="username" className="">
                    Username or email address *
                  </label>
                  <input id="username" type="text" className="mt-2 w-full border border-[#edebeb] rounded py-[.5rem]" required />
                </div>

                <div>
                  <label htmlFor="password" className="text-gray-700 block font-medium">
                    Password *
                  </label>
                  <div className="w-50 border flex justify-between items-center border-[#edebeb] rounded py-[.5rem] px-2">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      className="w-[6rem] outline-none"
                      required
                    />
                    <button type="button" onClick={togglePassword}>
                      {showPassword ? <IoIosEye size={20} /> : <IoIosEyeOff size={20} />}
                    </button>
                  </div>
                </div>

                <div className="md:flex block justify-between items-center space-x-2">
                  {/* <Checkbox id="remember" /> */}
                  <label htmlFor="remember" className="flex items-center gap-2  cursor-pointer">
                    <input
                      type="checkbox"
                      id="remember"
                      className="accent-blue-600 w-4 h-4"
                    />
                    <span className="text-[.9rem] ">Remember me</span>
                  </label>


                  <p className="text-[.85rem] text-[#252424] md:mt-0 mt-2">lost your password?</p>

                </div>

                <button className="w-[7rem] font-semibold text-[1.1rem] bg-black text-white py-3">Log In</button>


              </form>
            </div>
          </div>

          {/* Register Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Register</h2>
            <div className="bg-white sm:h-[23rem] h-[26rem] p-6 rounded-lg  border border-gray-200">
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className=" ">
                    Email address *
                  </label>
                  <input id="email" type="email" className="mt-2 w-full border border-[#edebeb] rounded py-[.5rem]" required />
                </div>

                <div className="text-sm text-gray-600 space-y-2">
                  <p className="text-[1rem]">A link to set a new password will be sent to your email address.</p>
                  <p className="text-black leading-6">
                    Your personal data will be used to support your experience throughout this website, to manage access
                    to your account, and for other purposes described in our privacy policy.
                  </p>
                </div>

                <button className="w-[7rem] font-semibold text-[1.1rem] bg-black  text-white py-3">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
