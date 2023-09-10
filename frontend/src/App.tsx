import {Routes, Route} from 'react-router-dom'
import {FC} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export const App:FC = () => {
  return (
    <>
      <Header></Header>
      {/* hier das routing konfigurieren, einen ladebalken während die einzelnen seiten laden*/}
      <Routes>
        <Route></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}
