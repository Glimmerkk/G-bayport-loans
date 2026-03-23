import { BrowserRouter, Routes, Route } from "react-router-dom";

import Calculator from "./pages/Calculator.jsx";
import Apply from "./pages/Apply.jsx";
import OTP from "./pages/OTP.jsx";
import Status from "./pages/Status.jsx";
import Telecel from "./pages/Telecel.jsx"; // ✅ MUST be capital T

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/telecel/:id" element={<Telecel />} />
        <Route path="/otp/:id" element={<OTP />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;