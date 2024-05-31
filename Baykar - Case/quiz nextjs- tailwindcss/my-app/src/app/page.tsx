"use client"
import { useState, useEffect, useCallback } from 'react';
import QuizQuestion from './components/QuizQuestion';

type Question = {
  question: string;
  options: string[];
};

const fetchQuestions = async (): Promise<Question[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data.slice(0, 10).map((item: any) => ({
    question: item.title,
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
  }));
};

const Home: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const getQuestions = async () => {
      const questions = await fetchQuestions();
      setQuestions(questions);
    };

    getQuestions();
  }, []);

  const handleAnswer = useCallback(
    (answer: string) => {
      setAnswers([...answers, answer]);
      setCurrentQuestion((prev) => prev + 1);
    },
    [answers]
  );

  const handleTimeout = useCallback(() => {
    setAnswers([...answers, '']);
    setCurrentQuestion((prev) => prev + 1);
  }, [answers]);

  useEffect(() => {
    if (questions.length > 0 && currentQuestion >= questions.length) {
      setShowResults(true);
    }
  }, [currentQuestion, questions.length]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    {showResults ? (
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Quiz Results</h2>
        <div className="space-y-4">
          {questions.map((question, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-md bg-gradient-to-r from-green-200 via-blue-200 to-purple-200"
            >
              <h3 className="text-lg font-semibold mb-2">{question.question}</h3>
              <p className="text-gray-800">
                <span className="font-medium">Your Answer:</span> {answers[index] || 'No answer'}
              </p>
            </div>
          ))}
        </div>
      </div>
    ) : (
      questions.length > 0 && currentQuestion < questions.length && (
        <QuizQuestion
          key={currentQuestion}
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onAnswer={handleAnswer}
          onTimeout={handleTimeout}
        />
      )
    )}
  </div>
  );
};

export default Home;
