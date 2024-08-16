import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Home from './pages/Home/Home';
import InternShip from './pages/Internship/InternShip';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Training from './pages/Training/Training';
import OurServices from './pages/OurServices/OurServices';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/internship" element={<InternShip/>} />
      <Route path='/training' element={<Training />}/>
      <Route path='/services' element={<OurServices />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
