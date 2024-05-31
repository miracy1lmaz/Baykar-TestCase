import React, { useEffect, useState } from 'react';

type QuizQuestionProps = {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
  onTimeout: () => void;
};

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, options, onAnswer, onTimeout }) => {
  const [clickable, setClickable] = useState(false);
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let timeout1: NodeJS.Timeout;
    let timeout2: NodeJS.Timeout;

    const startTimers = () => {
      setCounter(30);
      setClickable(false);

      timer = setInterval(() => {
        setCounter((prev) => prev - 1);
      }, 1000);

      timeout1 = setTimeout(() => setClickable(true), 10000);
      timeout2 = setTimeout(onTimeout, 30000);
    };

    startTimers();

    return () => {
      clearInterval(timer);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [question, onTimeout]);

  const getCounterStyle = () => {
    if (counter > 10) {
      return "text-white";
    } else if (counter > 5) {
      return "text-yellow-300 animate-pulse";
    } else {
      return "text-red-500 animate-bounce";
    }
  };

  return (
    <div className="p-8 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-lg shadow-xl">
      <h2 className="text-3xl font-extrabold mb-8 text-white text-center drop-shadow-lg">{question}</h2>
      <div className="grid grid-cols-2 gap-6 mb-8">
        {options.map((option, index) => (
          <button
            key={index}
            className={`py-4 px-6 bg-white text-gray-800 font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform ${
              clickable
                ? 'hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-lg active:scale-95'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
            onClick={() => clickable && onAnswer(option)}
            disabled={!clickable}
          >
            {option}
          </button>
        ))}
      </div>
      <div className={`text-center text-lg font-medium ${getCounterStyle()}`}>
        {clickable ? (
          <p>{counter} seconds remaining</p>
        ) : (
          <p>{counter - 20} seconds to unlock answers</p>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;
