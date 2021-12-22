import './css/style.css';
import {Logo, Menu} from './components/Header.js';
import Footer from './components/Footer.js';
import Panels from './components/Panels.js';


function App() {
  return (
    <div className="App">
      <figure>
        <Logo />
        <Menu />

        <Panels />

        <div className="btnPrev">PREV</div>
        <div className="btnNext">NEXT</div>

        <Footer />
      </figure>
    </div>
  );
}

export default App;
