import React from 'react';
import './App.css';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import StockDetails from './Components/StockDetails';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
	return (
		<div>
			<About />
			<Dashboard />
			<StockDetails />
		</div>
	);
}

export default App;
