import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [load, upadateLoad] = useState(true);
	return (
		<div className="App">
			<Router>
				<div className="App" id={"scroll"}>
					<Switch>
						<Route path="/" exact component={Home} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
