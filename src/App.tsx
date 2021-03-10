import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';

import './styles/global.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Homepage}></Route>
    </Router>
  );
}

export default App;
