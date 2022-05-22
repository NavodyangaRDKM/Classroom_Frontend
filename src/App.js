
import './App.css';

import Header from './components/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddStudent from './components/AddStudent';
import RetrieveStudent from './components/RetrieveStudent';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/add" exact component={AddStudent} />
        <Route path="/" exact component={RetrieveStudent} />

      </div>
    </Router>
  );
}

export default App;
