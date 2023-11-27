import React, { useState } from 'react'
import './index.css'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Quiz from './Quiz'
import Score from './Score'

const App = () => {
  const [score, setScore] = useState(0)
  return (
    <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/score' element={<Score score={score} setScore={setScore} />} />
            <Route path='/quiz/:category' element={<Quiz score={score} setScore={setScore} />} />
          </Routes>
        </Router>
  )
}

export default App