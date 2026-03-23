import { useParams, useNavigate } from "react-router-dom";

export default function OTP() {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log("OTP ID:", id);

  return (
    <div style={{ padding: "20px" }}>
      <h1>OTP Page</h1>

      <p>ID: {id}</p>

      <button onClick={() => navigate("/status")}>
        Finish
      </button>
    </div>
  );
}