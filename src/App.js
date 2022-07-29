import React  from 'react';
import './App.css';
import {BrowserRouter as Router ,  Routes , Route} from  "react-router-dom"
import Home from './pages/Home';
import DetailsArticle from './pages/DetailsArticle';
import ListArticles from './pages/ListArticles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Post from './backOffice/Post';
import ArticleOnline from './backOffice/ArticleOnline';

import Edit from './backOffice/Edit';
import BackOffice from './pages/BackOffice';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">

      <Router>     
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<LandingPage/>} />
          <Route path="/list-articles" element={<ListArticles/>} />
          <Route path="/detail/id:" element={<DetailsArticle/>} />
          <Route path="back-office" element={<BackOffice/>} >
              <Route path="post" element={<Post />} />
              <Route path="online" element={<ArticleOnline />} />
              <Route path="edit-article/id:" element={<Edit/>} />
          </Route>

          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}export default App;
