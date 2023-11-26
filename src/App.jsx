import React from 'react'
import './index.css'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Quiz from './Quiz'
import Score from './Score'

const App = () => {
  return (
    <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/score' element={<Score />} />
            <Route path='/quiz/:category' element={<Quiz/>} />
          </Routes>
        </Router>
  )
}

export default App