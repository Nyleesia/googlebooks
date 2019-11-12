import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer"; 
import Navbar from "./components/navbar"; 
import ToLibrary  from "./pages/library"; 
import NoResults from "./pages/noResults"; 
import  Search from "./pages/search"; 
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={ToLibrary} />
          <Route exact path="/saved/:id" component={ToLibrary} />
          <Route component={NoResults} /> 
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;