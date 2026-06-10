import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/loginpic.jpeg";
import Loader from "../component/Loader";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    console.log("loading set to true");

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setLoading(false);
      return setError("Passwords do not match");
    }

    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
    const body = isLogin
      ? { email: formData.email, password: formData.password }
      : {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        };

    try {
      const res = await fetch(`https://gensler-lgb1.onrender.com${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        return setError(data.message || "Something went wrong");
      }

      localStorage.setItem("token", data.token);

      if (isLogin) {
        navigate("/home");
      } else {
        alert("Account created! Please log in.");
        setIsLogin(true);
      }
    } catch (err) {
      setError("Could not connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 py-8 sm:px-6"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for readability on mobile */}
      <div className="absolute inset-0 bg-black/30 sm:bg-black/20" />

      <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-2xl">
        {/* Header Title */}
        <div className="flex justify-center mb-4">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-center bg-linear-to-r from-blue-700 via-cyan-600 to-cyan-300 bg-clip-text text-transparent"
          >
            {isLogin ? "Login to Gensler" : "Sign Up to Gensler"}
          </h2>
        </div>

        {/* Tab control */}
        <div className="relative flex h-11 sm:h-12 mb-5 sm:mb-6 border border-gray-200 rounded-full overflow-hidden">
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 text-sm sm:text-lg font-medium transition-all z-10 ${
              isLogin ? "text-white" : "text-black"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 text-sm sm:text-lg font-medium transition-all z-10 ${
              !isLogin ? "text-white" : "text-black"
            }`}
          >
            Sign Up
          </button>
          <div
            className={`absolute top-0 h-full w-1/2 rounded-full bg-linear-to-r from-blue-700 via-cyan-600 to-cyan-200 transition-all duration-300 ${
              isLogin ? "left-0" : "left-1/2"
            }`}
          />
        </div>

        {/* Error message */}
        {error && (
          <p className="text-red-500 text-xs sm:text-sm mb-3 text-center">
            {error}
          </p>
        )}

        {/* Form */}
        <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full p-3 text-sm sm:text-base border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 placeholder:text-gray-400 bg-transparent"
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 text-sm sm:text-base border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 placeholder:text-gray-400 bg-transparent"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 text-sm sm:text-base border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 placeholder:text-gray-400 bg-transparent"
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 text-sm sm:text-base border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 placeholder:text-gray-400 bg-transparent"
            />
          )}

          {isLogin && (
            <div className="text-right">
              <p className="text-cyan-600 text-sm hover:underline cursor-pointer">
                Forgot Password?
              </p>
            </div>
          )}

          <div>
  {loading ? (
    <Loader />
  ) : (
    <button
      type="submit"
      className="w-full p-3 bg-linear-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white rounded-full text-sm sm:text-lg font-medium hover:opacity-90 active:scale-95 transition-all"
    >
      {isLogin ? "Login" : "Sign Up"}
    </button>
  )}
</div>

          <p className="text-center text-gray-600 text-sm sm:text-base">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsLogin(!isLogin);
              }}
              className="text-cyan-600 hover:underline font-medium"
            >
              {isLogin ? "Sign Up Now" : "Login"}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
