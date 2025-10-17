import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'

import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'
import Footer from './componentes/Footer/Footer'
import Header from './componentes/Header/Header'






function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
      
        <main>
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/galeria" element={<Gallery />} />
                <Route path="/Contato" element={<Contact />} />

          
       
        </Routes>    
        </main>
      
      </div>
    </Router>
  )
}

export default App
