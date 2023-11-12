/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Med from '../assets/med.avif'


const Input = () => {

  // styles
  const styles = {
  backgroundImage: `url(${Med})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
  };

  
  const [name, setName] = useState('')
  const [bmi, setBmi] = useState('')
  const [obesity, setObesity] = useState('')
  const [genetics, setGenetics] = useState('')

  const [result, setResult] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/pubertyOnset", {
          name,
          bmi,
          obesity,
          genetics,
        }
      );
      setResult(response.data.result);
    } catch (error) {
      console.error("Error:", error);
    }

    // this clears form input values after submission
    setName('')
    setBmi('')
    setObesity('')
    setGenetics('')
  };

  return (
    <main className="bg-blue-300" style={styles}>
      <h1 className="text-4xl font-bold text-center pt-10 text-white">
        PUBERTY ONSET PREDICTION SYSTEM
      </h1>
      <div className="flex justify-center items-center h-screen">
        <form className="bg-white p-8 rounded shadow-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border border-slate-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Enter Patient's Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="bmi"
            >
              Body Mass Index
            </label>
            <select
              className="shadow appearance-none border border-slate-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="bmi"
              name="bmi"
              type="text"
              placeholder="bmi"
              value={bmi}
              onChange={(e) => setBmi(e.target.value)}
            >
              <option value=""></option>
              <option value="Option 1">Underweight (0kg-30kg)</option>
              <option value="Option 2">Normal (30kg - 85kg)</option>
              <option value="Option 3">Overweight (85kg-100kg)</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="obesity"
            >
              Childhood Obesity
            </label>
            <select
              className="shadow appearance-none border border-slate-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="obesity"
              name="obesity"
              type="text"
              placeholder="obesity"
              value={obesity}
              onChange={(e) => setObesity(e.target.value)}
            >
              <option value=""></option>
              <option value="Option 1">Not Obese</option>
              <option value="Option 2">Slightly Obese</option>
              <option value="Option 3">Very Obese</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="genetics"
            >
              Maternal Genetics
            </label>
            <select
              className="shadow appearance-none border border-slate-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="genetics"
              name="genetics"
              type="text"
              placeholder="genetics"
              value={genetics}
              onChange={(e) => setGenetics(e.target.value)}
            >
              <option value=""></option>
              <option value="Option 1">Late</option>
              <option value="Option 2">Average</option>
              <option value="Option 3">Early</option>
            </select>
          </div>

          <div className="flex items-center justify-center">
            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            />
          </div>
        </form>
        <div className='text-gray-300'>
          <p className='font-bold text-xl'>RESULTS SHOWN HERE:</p>
          {result && <p>Result: {result}</p>}
        </div>
      </div>
    </main>
  );
};

export default Input;
