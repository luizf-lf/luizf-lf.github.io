import { BrowserRouter as Router, Route } from 'react-router-dom';
// import DevelopmentInfo from './components/DevelopmentInfo';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Footer from './components/Footer';

import './styles/global.css';
import './i18n';
import { Suspense } from 'react';

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Navbar />
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/projects" component={Projects}></Route>

          <Footer />
        </Router>
        {/* <DevelopmentInfo /> */}
      </Suspense>
    </>
  );
}

export default App;
