import { useState } from "react";
import "../styles/app.css";

export default function OTP() {
  const [otp, setOtp] = useState("");

  return (
    <div className="loan-container">
      <div className="card">

        <div className="header">
          <h1>Enter OTP</h1>
          <p className="subtitle">Check your phone</p>
        </div>

        <input
          maxLength="6"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter code"
        />

        <button>Submit</button>

      </div>
    </div>
  );
}