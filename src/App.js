import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Preloader from "../src/components/Pre";
import Footer from "./components/Footer";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [load, upadateLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			upadateLoad(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);
	return (
		<Router>
			<Preloader load={load} />
			<div className="App" id={load ? "no-scroll" : "scroll"}>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/resume" component={Resume} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
