import React  from 'react';
import './App.css';
import {BrowserRouter as Router ,  Routes , Route} from  "react-router-dom"
import Home from './pages/Home';
import DetailsArticle from './pages/DetailsArticle';
import ListArticles from './pages/ListArticles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Router>     
        <Navbar/>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/list-articles" element={<ListArticles/>} />
          <Route path="/detail/id:" element={<DetailsArticle/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}export default App;
