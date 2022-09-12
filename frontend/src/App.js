import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Ruben from './Pages/Ruben/Ruben';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ruben />} />
      </Routes>
    </Router>
  );
}

export default App;
