import React from 'react';
import Header from "./components/Header";
import About from "./components/About"
import Blog from "./components/Blog";
import Media from "./components/Media";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from 'react-router-dom';
// import './App.css';
import "./index.css"

class App extends React.Component {
  render(){
      return (
      <Router>
        <Header />
        <About />
        <Blog />
        <Media />
        <Footer />
      </Router>
    );
  }
}

export default App;
