import React from 'react'
import { Brand, CTA, Navbar } from './components'
import { Footer, Blog, Possibility, Features, WhatGpt3, Header } from './containers'
import './App.css';
import SignUp from './components/signup/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div>
        <div className='App'>
          <div className='gradient__bg'>
            <Navbar />
            <Header />
          </div>
          <Brand />
          <WhatGpt3 />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer />

        </div>

      </div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>


    </Router>

  )
}

export default App
