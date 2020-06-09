import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";//edited file
import Search from "./pages/search/Search.js"
import Save from "./pages/save/Save.js"
import Navbar from "./components/navbar/Navbar.js"

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Route exact path="/" component={Search} />
          <Route exact path="/Save" component={Save} />
        </Router>
    </div>
  );
}

export default App;
