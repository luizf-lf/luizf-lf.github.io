import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import SuspenseLoader from './components/SuspenseLoader';

import './styles/global.css';
import './i18n';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <Router>
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route path="/projects" component={Projects} />
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
