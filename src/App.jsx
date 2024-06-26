
import './App.css'
import About from './components/About'
import Features from './components/Features'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Pricing from './components/Pricing'
import Banner from './shared/Banner'
import Fotter from './shared/Fotter'

function App() {
  

  return (
    <>
   <Navbar />
   <Home />
   <Features />
   <About />
   <Pricing />
   <Newsletter />
   <Fotter />
    </>
  )
}

export default App
