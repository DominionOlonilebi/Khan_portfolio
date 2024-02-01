import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Cards from './Components/Cards';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import Navbars from './Components/Navbars';

function App() {
  return (
    <div >
      <Navbars/>
      <Home/>
      <About/>
      <Cards/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
