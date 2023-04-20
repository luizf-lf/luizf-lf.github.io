import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles/global.css';
import './i18n';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Loader from './components/Loader';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
