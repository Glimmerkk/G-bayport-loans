import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function OTP() {
  const { id } = useParams();

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const submitOTP = async () => {
    if (!otp) {
      alert("Enter OTP");
      return;
    }

    try {
      setLoading(true);

      await axios.post("http://localhost:5000/apply/otp", {
        id,
        otp,
      });

      alert("OTP submitted. Waiting for approval...");
    } catch (err) {
      alert("Error submitting OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Enter OTP</h2>

      <p>Application ID: {id}</p>

      <input
        type="number"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />

      <button onClick={submitOTP} disabled={loading}>
        {loading ? "Submitting..." : "Submit OTP"}
      </button>
    </div>
  );
}