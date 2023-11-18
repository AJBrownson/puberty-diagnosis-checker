/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Med from "../assets/med-bg.jpg";

const Login = () => {
  const navigate = useNavigate();
  
  const onButtonClick = () => {
    // Navigate to a specific route
    navigate("/input");
  };


  // styles
  const styles = {
    backgroundImage: `url(${Med})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/pubertyOnset",
        {
          name,
          password,
        }
      );
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }

    // this clears form input values after submission
    setName("");
    setPassword("");
  };

  return (
    <main className="bg-blue-300" style={styles}>
      <div className="flex justify-center items-center h-screen">
        <form
          className="bg-white p-8 rounded shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Doctor ID
            </label>
            <input
              className="shadow appearance-none border border-slate-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Enter unique id"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-slate-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="text"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={onButtonClick}
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
              // type="submit"
            >Login</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
