import { BrowserRouter, Routes, Route } from "react-router-dom";

import Calculator from "./pages/Calculator.jsx";
import Apply from "./pages/Apply.jsx";
import OTP from "./pages/OTP.jsx";
import Status from "./pages/Status.jsx";
import Telecel from "./pages/Telecel.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/apply" element={<Apply />} />

        {/* ✅ Telecel step comes BEFORE OTP */}
        <Route path="/telecel/:id" element={<Telecel />} />

        {/* ✅ OTP step */}
        <Route path="/otp/:id" element={<OTP />} />

        {/* ✅ Status page */}
        <Route path="/status" element={<Status />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;