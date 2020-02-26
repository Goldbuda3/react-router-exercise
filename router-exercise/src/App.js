import React from 'react';
import './App.css';
import { BrowserRouter, Route,} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Feed from './pages/Feed';
import FAQ from './pages/FAQ';

function App() {
  return(
    <BrowserRouter>
    <Header/>
    <Card.Body>
    <Route exact path='/feed' component={Feed}/>
    <Route exact path='/faq' component={FAQ}/>
    <Route exact path='/' component={Home}/>
    </Card.Body>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
