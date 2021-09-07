import './App.css';
import List from './Components/List';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <Router>
      <div className="App">
      <Routes />
      </div>
    </Router>
  );
}

export default App;
