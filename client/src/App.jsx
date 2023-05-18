import './App.css';
import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import NewProductView from './views/NewProductView';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/products/new" replace />} />
        <Route path="/products/new" element={<NewProductView />} />
      </Routes>
    </div>
  );
}
  
export default App
