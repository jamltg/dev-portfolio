import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import { NavigationBar } from "./components/Navbar"
import About from "./components/About"
import Collaborate from "./components/Collaborate"
import Contact from "./components/Contact"

function App() {
  return (
    <div>
      <NavigationBar/>
      <Hero/>
      <About/>
      <Collaborate/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
