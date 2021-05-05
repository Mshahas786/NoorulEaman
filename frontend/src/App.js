import React from "react"
import Navbar from "./Componets/Navbar/Navbar"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sell from "./Componets/PageRouter/Sell";
import Overview from "./Componets/PageRouter/Overview";
import Sidebar from "./Componets/Sidebar/Sidebar";

function App() {
  return <div className="App"> 
    <Router>
    <Navbar/>
    <Route path="/" exact component={Sell} />
    <Route path="/overview" exact component={Overview} />
    </Router>
    </div>
}

export default App;
