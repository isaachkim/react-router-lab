import React from 'react';
import { useParams } from 'react-router-dom';

function StockDetails({ stocks }) {

	const { symbol } = useParams();
	let stockObj = stocks.find((stock) => stock.symbol === symbol);
	console.log(stockObj);
	return (
		<ul>
			<li>Name: {stockObj.name}</li>
			<li>Symbol: {stockObj.symbol}</li>
			<li>Last Price: {stockObj.lastPrice}</li>
			<li>High: {stockObj.high}j</li>
			<li>Low: {stockObj.low}</li>
			<li>Open: {stockObj.open}</li>
			<li>Change: {stockObj.change}</li>
		</ul>
	);
}

export default StockDetails;
