import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Converstation from "./pages/Converstation";
import Login from "./pages/Login";
import Payment from './pages/Payment';

function App() {
  return (
    <Router>
      <Routes>
        {/* Diğer sayfalar buraya eklenir */}
        <Route path="/" element={<Login />} />
        <Route path="/conversation" element={<Converstation />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
