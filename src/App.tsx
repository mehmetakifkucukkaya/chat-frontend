import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Converstation from "./pages/Converstation";
import Login from "./pages/Login";
import Payment from './pages/Payment';
import SignUp from './pages/SignUp';
import GetPayment from './pages/GetPayment';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Diğer sayfalar buraya eklenir */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/converstation" element={<Converstation />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/getPayment" element={<GetPayment />} />
      </Routes>
    </Router>
  );
}

export default App;
