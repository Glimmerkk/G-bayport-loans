import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Apply() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    id: "",
    amount: "",
    repayment: "12 months",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Apply submitted:", form);

    // ✅ Save data
    localStorage.setItem("loanData", JSON.stringify(form));

    // ✅ Navigate to Telecel
    navigate("/telecel/1");
  };

  return (
    <div>
      <h1>Apply Page</h1>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="id" placeholder="ID" onChange={handleChange} required />
        <input name="amount" type="number" placeholder="Amount" onChange={handleChange} required />

        <button type="submit">
          Proceed
        </button>
      </form>
    </div>
  );
}