import React from 'react';
import Header from './lib/components/Header.js';
import Footer from './lib/components/Footer.js';
import WooRouter from './lib/WooRouter.js';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<React.Fragment>
			<Header />
			<Router>
				<WooRouter />
			</Router>
			<Footer />
		</React.Fragment>
	);
}

export default App;
