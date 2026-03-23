import { BrowserRouter, Routes, Route } from "react-router-dom";

import Calculator from "./pages/Calculator";
import Apply from "./pages/Apply";
import OTP from "./pages/OTP";
import Status from "./pages/Status";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/otp/:id" element={<OTP />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;