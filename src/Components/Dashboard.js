import React from 'react';

import { Link } from 'react-router-dom';

function Dashboard({ stocks }) {
	return (
		<ul>
			{stocks.map((stock, index) => {
				return (
					<li>
						<Link key={index} to={`/stocks/${stock.symbol}`}>
							{stock.name} - {stock.symbol}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default Dashboard;
