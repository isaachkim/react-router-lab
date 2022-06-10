import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import StockDetails from './Components/StockDetails';
import stockData from './data/stock-data.json';
import { Route, Routes, Link } from 'react-router-dom';

//process.env.REACT_APP_IEX_KEY
function App() {
	const [stocks, setStocks] = useState(stockData);

	return (
		<div className='App'>
			<nav>
				<ul>
					<li>
						<Link to='/react-router-lab'>Home</Link>
					</li>
					<li>
						<Link to='/react-router-lab/about'>About</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route
					path='/react-router-lab'
					element={<Dashboard stocks={stocks} />}
				/>
				<Route
					path='/react-router-lab/stocks'
					element={<Dashboard stocks={stocks} />}
				/>
				<Route path='/react-router-lab/about' element={<About />} />
				<Route
					path='/react-router-lab/stocks/:symbol'
					element={<StockDetails stocks={stocks} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
