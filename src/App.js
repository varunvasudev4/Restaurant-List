
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import RestaurantDetails from './components/RestaurantDetails';
function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/details/:id" element={<RestaurantDetails/>}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
