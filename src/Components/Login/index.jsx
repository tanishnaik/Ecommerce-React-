import React from "react";
import { useLogin } from "../../context/loginContext";
import { userLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { loginDispatch, email, password } = useLogin();
  const navigate = useNavigate();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const data = await userLogin(email, password);
    if(Object.keys(data)?.length>0 ){
      localStorage.setItem("token",data.access_token);
    }
    loginDispatch({
      type: "TOKEN",
      payload: {
        token: data,
      },
    });
    if (data.access_token) {
      navigate("/");
    }
    console.log({ data });
  };

  const onEmailChange = (e) => {
    loginDispatch({
      type: "EMAIL",
      payload: { value: e.target.value },
    });
  };

  const onPasswordChange = (e) => {
    loginDispatch({
      type: "PASSWORD",
      payload: { value: e.target.value },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm sm:max-w-md bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
          Login
        </h2>
        <form onSubmit={onFormSubmit} className="space-y-4 sm:space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="abc@gmail.com"
              className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              onChange={onEmailChange}
            />
          </div>
          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password *
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="abc123"
              className="w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              onChange={onPasswordChange}
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-transform duration-300 hover:scale-[1.05] active:scale-[0.95]"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
