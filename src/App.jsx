
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css'
import NavBar from "./Components/Navbar.jsx";
import Home from './Components/Home.jsx';
import About from "./Components/About.jsx";
import DayNightToggle from './Components/DayNightToggle.jsx';
import CardSection from "./Components/CardSection.jsx";
import SmokeTrail from "./Components/SmokeTrail.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
<DayNightToggle/>
<SmokeTrail/>
{/* <CardSection/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/> 
        {/* <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>  */}
      </Routes>
      {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;