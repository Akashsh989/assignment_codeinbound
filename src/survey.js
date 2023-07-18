import React, { useState } from 'react';

const Survey = () => {
  const [startSurvey, setStartSurvey] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [productSatisfaction, setProductSatisfaction] = useState('');
  const [priceFairness, setPriceFairness] = useState('');
  const [valueForMoney, setValueForMoney] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [improvements, setImprovements] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleStart = () => {
    setStartSurvey(true);
  };

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset form fields
    setProductSatisfaction('');
    setPriceFairness('');
    setValueForMoney('');
    setRecommendation('');
    setImprovements('');

    setIsSubmitted(true);
  };

  const renderSurvey = () => {
    return (
      <div className="mx-auto p-4 flex flex-col items-center ">
        <h1 className="text-2xl font-bold mb-4 flex justify-center">Customer Survey</h1>
        <div className="mb-4">
          <p className="mb-2">Question {currentQuestion}/5</p>
          <div className="flex">
            {currentQuestion > 1 && (
              <button
                className="mr-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-1 rounded"
                onClick={handlePrevious}
              >
                Previous
              </button>
            )}
            {currentQuestion < 5 ? (
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                onClick={handleNext}
              >
                Next
              </button>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                type="submit"
              >
                Submit
              </button>
            )}
          </div>
        </div>
        {currentQuestion === 1 && (
          <div className="mb-4">
            <label htmlFor="product-satisfaction" className="block text-gray-700">
              How satisfied are you with our products?
            </label>
            <select
              id="product-satisfaction"
              className="border border-gray-300 p-2 rounded-md w-full"
              value={productSatisfaction}
              onChange={(e) => setProductSatisfaction(e.target.value)}
              required
            >
              <option value="">Select rating</option>
              <option value="1">1 (Not satisfied)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5 (Very satisfied)</option>
            </select>
          </div>
        )}
        {currentQuestion === 2 && (
          <div className="mb-4">
            <label htmlFor="price-fairness" className="block text-gray-700">
              How fair are the prices compared to similar retailers?
            </label>
            <select
              id="price-fairness"
              className="border border-gray-300 p-2 rounded-md w-full"
              value={priceFairness}
              onChange={(e) => setPriceFairness(e.target.value)}
              required
            >
              <option value="">Select rating</option>
              <option value="1">1 (Not fair)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5 (Very fair)</option>
            </select>
          </div>
        )}
        {currentQuestion === 3 && (
          <div className="mb-4">
            <label htmlFor="value-for-money" className="block text-gray-700">
              How satisfied are you with the value for money of your purchase?
            </label>
            <select
              id="value-for-money"
              className="border border-gray-300 p-2 rounded-md w-full"
              value={valueForMoney}
              onChange={(e) => setValueForMoney(e.target.value)}
              required
            >
              <option value="">Select rating</option>
              <option value="1">1 (Not satisfied)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5 (Very satisfied)</option>
            </select>
          </div>
        )}
        {currentQuestion === 4 && (
          <div className="mb-4">
            <label htmlFor="recommendation" className="block text-gray-700">
              On a scale of 1-10, how likely are you to recommend us to your friends and family?
            </label>
            <select
              id="recommendation"
              className="border border-gray-300 p-2 rounded-md w-full"
              value={recommendation}
              onChange={(e) => setRecommendation(e.target.value)}
              required
            >
              <option value="">Select rating</option>
              <option value="1">1 (Not likely)</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10 (Very likely)</option>
            </select>
          </div>
        )}
        {currentQuestion === 5 && (
          <div className="mb-4">
            <label htmlFor="improvements" className="block text-gray-700">
              What could we do to improve our service?
            </label>
            <textarea
              id="improvements"
              className="border border-gray-300 p-2 rounded-md w-full"
              value={improvements}
              onChange={(e) => setImprovements(e.target.value)}
              required
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4 flex justify-center">
      {!startSurvey ? (
        <div className='flex flex-col items-center'>
          <h1 className="text-2xl font-bold mb-4 flex justify-center">Welcome!</h1>
          <p className="mb-4">Thank you for choosing our shop. Please take a moment to provide us with your valuable feedback.</p>
          <button
            className=" bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={handleStart}
          >
            Start Survey
          </button>
        </div>
      ) : isSubmitted ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">Successfully Submitted!</h1>
          <p>Thank you for completing the survey.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {renderSurvey()}
        </form>
      )}
    </div>
  );
};

export default Survey;
