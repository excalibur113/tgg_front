import './App.css';
import { Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navs from './components/Navs';
import Home from './pages/Home';
import About from './pages/About';
import ProductList from './pages/ProductList';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
     <Navs />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Product" element={<ProductList />} />
    </Routes>
    <ProductList />
    <Footer />
    
    </div>
  
  );
}

export default App;
