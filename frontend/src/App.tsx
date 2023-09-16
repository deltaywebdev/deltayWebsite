import {Routes, Route} from 'react-router-dom'
import {FC} from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Products from './pages/Products'
import Pricing from './pages/Pricing'
import Projects from './pages/Projects'
import Company from './pages/Company'
import Career from './pages/Career'
import {AGB, Privacy, Imprint} from './pages/LegalInfo'

export const App:FC = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/company' element={<Company />} />
        <Route path='/career' element={<Career />} />
        <Route path='/agb' element={<AGB />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/imprint' element={<Imprint />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}
