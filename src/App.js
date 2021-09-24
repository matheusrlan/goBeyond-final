import React from 'react';
import './App.css';
import Main from './components/main/content';
import Footer from './components/footer/footer';
import Header from './components/header';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
