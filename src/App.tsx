import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import AboutPage from './Components/Pages/AboutPage';
import TodosPage from './Components/Pages/TodosPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Route component={TodosPage} path="/" exact />
        <Route component={AboutPage} path="/about" />
      </div>
    </BrowserRouter>
  );
}

export default App;
