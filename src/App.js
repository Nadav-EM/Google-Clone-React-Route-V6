import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/Pages/About";
import Store from "./components/Pages/Store";
import Gmail from "./components/Pages/Gmail";
import Images from "./components/Pages/Images";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/store" element={<Store />} />
					<Route path="/gmail" element={<Gmail />} />
					<Route path="/images" element={<Images />} />
				</Routes>
			</BrowserRouter>
			<Body />
		</>
	);
}

export default App;
