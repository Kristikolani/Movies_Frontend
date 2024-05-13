// components/RegisterForm.js
"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const RegisterForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rights, setRights] = useState("");

  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5044/api/UsersAuth/register",
        { userName, email, password, rights }
      );

      // Assuming the backend returns a token on successful registration

      router.push("/api/auth");
      toast.success("Successfully registered!");
    } catch (err) {
      // Handle registration error
      console.error("Registration failed:", err);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(25,25,25,25)),linear-gradient(to_top,rgba(0,0,0,0),rgba(25,25,25,25)),url('../public/images/cinema.png')] bg-no-repeat bg-center bg-cover h-screen w-full">
      <div className="min-w-fit flex justify-center items-center h-screen">
        <div
          style={{ backgroundColor: "rgb(25, 27, 35)" }}
          className="block w-72 lg:w-96 lg:h-96 rounded-lg p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <form className="mt-2" onSubmit={handleRegister}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[85%] rounded my-3 ml-4 px-3 py-[0.25rem] text-sm text-white font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out"
              style={{ backgroundColor: "rgb(40, 42, 50)" }}
              type="email"
              placeholder="Email"
              required
            ></input>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-[85%] rounded my-3 ml-4 px-3 py-[0.25rem] text-sm text-white font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out"
              style={{ backgroundColor: "rgb(40, 42, 50)" }}
              type="text"
              placeholder="UserName"
              required
            ></input>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-[85%] rounded my-3 ml-4 px-3 py-[0.25rem] text-sm text-white font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out"
              style={{ backgroundColor: "rgb(40, 42, 50)" }}
              required
            ></input>
            <input
              value={rights}
              onChange={(e) => setRights(e.target.value)}
              className="w-[85%] rounded my-3 ml-4 px-3 py-[0.25rem] text-sm text-white font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out"
              style={{ backgroundColor: "rgb(40, 42, 50)" }}
              type="text"
              placeholder="Rights"
              required
            ></input>

            <button
              type="submit"
              className="block w-[85%] rounded bg-transparent mt-8 ml-4 my-2 px-6 pb-2 pt-2.5 text-center text-xs font-medium uppercase leading-normal text-white border-2 border-yellow-500 hover:bg-gray-900"
            >
              Register
            </button>
            <Toaster />

            <p className="mt-6 text-center text-sm text-white">
              Already have an account?
              <a href="/api/auth" className="text-yellow-500 mx-1 my-2">
                Log in!
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
