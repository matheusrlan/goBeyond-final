import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import PostList from './components/main';

function App() {
  return (
    <div>
      <Header/>
      <PostList/>
      <Footer/>
    </div>
  );
}

export default App;
