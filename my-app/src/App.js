import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SideNav from './Components/SideNav/SideNav';
import Home from './Pages/Home';
import QuizPage from './Pages/QuizPage';
import ShoppingPage from './Pages/ShoppingPage';
import JuenPage from './Pages/JuenPage';
import NameplatePage from './Pages/NameplatePage';
import App2Page from './Pages/App2Page';
import AcademicsPage from './Pages/AcademicsPage';
import CalculatorPage from './Pages/CalculatorPage';

function App() {
  return (
    <div className="app-shell">
      <SideNav />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prelim" element={<JuenPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/shopping" element={<ShoppingPage />} />
          <Route path="/nameplate" element={<NameplatePage />} />
          <Route path="/app2" element={<App2Page />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
