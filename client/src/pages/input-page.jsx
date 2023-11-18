/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Med from '../assets/med.avif';


const Input = () => {
  // styles
  const styles = {
    backgroundImage: `url(${Med})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  };

  const [name, setName] = useState('');
  const [bmi, setBmi] = useState('');
  const [obesity, setObesity] = useState('');
  const [genetics, setGenetics] = useState('');
  const [result, setResult] = useState('');
  const [recommendation, setRecommendation] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/pubertyOnset", {
          name,
          bmi,
          obesity,
          genetics
        }
      );
      setResult(response.data.result);
      setRecommendation(response.data.recommendation);
    } catch (error) {
      console.error("Error:", error);
    }

    // this clears form input values after submission
    setName('');
    setBmi('');
    setObesity('');
    setGenetics('');
  };

  return (
    <main className="bg-blue-300" style={styles}>

      <div className="px-80 grid grid-cols-2 gap-10 items-center h-screen">
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
              Body Mass Index (In %)
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
              <option value="underweight">Underweight (0 - 18.5)</option>
              <option value="normal">Normal (18.5 - 24.9)</option>
              <option value="overweight">Overweight (24.9 - 29.9)</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="obesity"
            >
              Childhood Obesity (In %)
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
              <option value="not">Not Obese (0 - 30)</option>
              <option value="slightly">Slightly Obese (30 - 80)</option>
              <option value="very">Very Obese (80 - 100)</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="genetics"
            >
              Maternal Genetics (In %)
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
              <option value="late">Late</option>
              <option value="average">Average</option>
              <option value="early">Early</option>
            </select>
          </div>

          <div className="flex items-center justify-center">
            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
              type="submit"
            />
          </div>
        </form>
        <div className='text-gray-300'>
          <p className='font-bold text-xl'>PUBERTY ONSET</p>
          {result && <p className='pb-6'><span className="font-bold">Prediction:</span> {result}</p>}
          {recommendation && <p><span className="font-bold">Recommendation:</span> {recommendation}</p>}
        </div>
      </div>
    </main>
  );
};

export default Input;
