// components/LoginForm.js
"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5044/api/UsersAuth/login",
        { email, password }
      );

      // Assuming the backend returns a token on successful login
      const token = response.data.result.token;
      localStorage.setItem("token", JSON.stringify(token));
      const name =
        response.data.result.user.firstName +
        " " +
        response.data.result.user.lastName;
      localStorage.setItem("name", name);

      const userId = response.data.result.user.id;
      localStorage.setItem("userId", userId);
      // Redirect to a protected route or dashboard
      router.push("/");
      toast.success("Successfully logged in!");
    } catch (err) {
      // Handle login error
      console.error("Login failed:", err);
      toast.error("Incorrect email or password");
    }
  };

  return (
    <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(25,25,25,25)),linear-gradient(to_top,rgba(0,0,0,0),rgba(25,25,25,25)),url('../public/images/cinema.png')] bg-no-repeat bg-center bg-cover h-screen w-full">
      <div className="min-w-fit flex justify-center items-center h-screen">
        <div
          style={{ backgroundColor: "rgb(25, 27, 35)" }}
          className="block w-72 lg:w-96 lg:h-96 rounded-lg p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <form className="mt-10" onSubmit={handleLogin}>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-[85%] rounded my-3 ml-4 px-3 py-[0.25rem] text-sm text-white font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out"
              style={{ backgroundColor: "rgb(40, 42, 50)" }}
              required
            ></input>

            <button
              type="submit"
              className="block w-[85%] rounded bg-transparent mt-8 ml-4 my-2 px-6 pb-2 pt-2.5 text-center text-xs font-medium uppercase leading-normal text-white border-2 border-yellow-500 hover:bg-gray-900"
            >
              Sign in
            </button>
            <Toaster />

            <p className="mt-6 text-center text-sm text-white">
              Don't have an account?
              <a href="auth/register" className="text-yellow-500 mx-1 my-2">
                Sign up!
              </a>
            </p>
            <div className="flex justify-center my-4">
              <a href="/auth" className="text-yellow-500 text-sm">
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
