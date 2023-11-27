import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './index.css'
import he from 'he'

const Quiz = ({ score, setScore }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  // const [scoreCount, setScoreCount] = useState(0)
  const { category } = useParams();

  const topic = {
    science: 18,
    music: 12,
    anime: 31,
    film: 11,
  }
  var URL = `https://opentdb.com/api.php?amount=10&category=${topic[category]}&difficulty=easy&type=multiple`

  useEffect(() => {
    fetch(URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setQuestions(data.results);
        makeOptions(data.results[currentQuestion]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [URL]);

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      const isCorrect = selectedOption === currentQuestionData.correct_answer;
      if (isCorrect) {
        setScore(score + 1);
        // console.log(score)
      }

      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);

      return isCorrect;
    }
    else return false
  };

  useEffect(() => {
    if (currentQuestion < questions.length) {
      makeOptions(questions[currentQuestion]);
    }
  }, [currentQuestion, questions]);

  const currentQuestionData = questions[currentQuestion];

  const makeOptions = (currentQuestionData) => {
    const options = currentQuestionData.incorrect_answers.slice();
    const randomIndex = Math.floor(Math.random() * (options.length + 1));
    options.splice(randomIndex, 0, currentQuestionData.correct_answer);
    setOptions(options);
  };
  const isAnswerCorrect = () => {
    // if(selectedOption === currentQuestionData.correct_answer){
    //   setScoreCount(scoreCount+1)
    //   return true
    // }
    // return false;
    return selectedOption === currentQuestionData.correct_answer;
  };

  return (
    <div className='h-screen flex justify-center items-center bg-img'>
      <div className='bg-gradient-to-br from-indigo-300 to-violet-300 p-5 rounded-lg w-2/3 shadow-2xl'>
        {currentQuestionData ? (
          <>
            <h2 className='text-3xl font-semibold mb-5'>
              Q.{currentQuestion+1} {he.decode(currentQuestionData.question)}
            </h2>
            <div className='flex gap-3 text-xl flex-col checkbox-container'>
              {options.map((answer, index) => (
                <label key={index}>
                  <input type='radio' name='option' onChange={handleOptionChange} value={answer} />
                  {he.decode(answer)}
                </label>
              ))}
            </div>
            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={handleNextQuestion}
                className='bg-green-500 py-2 px-5 shadow-lg text-xl rounded-md font-semibold mt-5'>
                Next
              </button>
            ) : (
              <Link to='/score'>
                <button
                  className='bg-red-500 py-2 px-5 shadow-lg text-xl rounded-md font-semibold mt-5'>
                  Finish
                </button>
              </Link>
            )}
            <p>{isAnswerCorrect() ? 'Correct!' : 'Incorrect!'}</p>
            <p>{score}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default Quiz