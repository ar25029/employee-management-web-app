import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="p-10 border-2 rounded-lg border-emerald-600">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col justify-center"
          action=""
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-700 font-medium text-lg rounded-full px-3 py-2 placeholder:text-gray-400 text-white"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-transparent border-2 border-emerald-700 font-medium text-lg rounded-full mt-2 px-3 py-2 placeholder:text-gray-400 text-white"
            type="password"
            placeholder="Enter your password"
          />
          <button
            className="outline-none bg-emerald-700 font-medium text-lg rounded-full mt-2 px-3 py-2 placeholder:text-gray-400 text-white"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
