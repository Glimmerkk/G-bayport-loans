import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/app.css";

export default function Status() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const check = async () => {
      try {
        const res = await axios.get(
          "https://g-bayport-loans.onrender.com/apply/status"
        );

        setStatus(res.data.status);
      } catch {
        setStatus("error");
      }
    };

    check();
  }, []);

  return (
    <div className="loan-container">
      <div className="card status-box">

        {status === "loading" && (
          <>
            <div className="spinner big"></div>
            <h2>Processing...</h2>
            <p>Please wait while we verify your details</p>
          </>
        )}

        {status === "approved" && (
          <>
            <div className="success-icon">✔</div>
            <h2>Approved</h2>
            <p>Your loan has been approved successfully</p>
          </>
        )}

        {status === "error" && (
          <>
            <h2>Error</h2>
            <p>Something went wrong</p>
          </>
        )}

      </div>
    </div>
  );
}