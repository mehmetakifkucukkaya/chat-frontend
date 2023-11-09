import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Converstation from "./pages/Converstation";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Diğer sayfalar buraya eklenir */}
        <Route path="/" element={<Login />} />
        <Route path="/conversation" element={<Converstation />} />
      </Routes>
    </Router>
  );
}

export default App;
