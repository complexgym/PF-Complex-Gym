import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Testimonials from './components/Testimonials/Testimonials'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={""} element={""}></Route>
        <Route path={""} element={""}></Route>
        <Route path={""} element={""}></Route>
        <Route path={""} element={""}></Route>
      </Routes>
      {/* <Testimonials/> */}
      <Footer/>
    </div>
  )
}

export default App
