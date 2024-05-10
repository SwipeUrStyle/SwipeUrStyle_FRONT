import React from 'react';
import { Hero, Navbar, Courses, Reviews, Footer } from './components';
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App