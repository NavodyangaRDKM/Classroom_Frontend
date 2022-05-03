
import './App.css';

import Header from './components/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddStudent from './components/AddStudent';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/add" exact component={AddStudent} />
      </div>
    </Router>
  );
}

export default App;
