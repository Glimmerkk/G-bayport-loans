import { BrowserRouter, Routes, Route } from "react-router-dom";

import Apply from "./pages/Apply.jsx";
import Telecel from "./pages/Telecel.jsx";
import OTP from "./pages/OTP.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Apply />} />
        <Route path="/telecel/:id" element={<Telecel />} />
        <Route path="/otp/:id" element={<OTP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;