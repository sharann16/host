import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Signup from './Component/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
