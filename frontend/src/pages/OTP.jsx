import { useParams } from "react-router-dom";

export default function OTP() {
  const { id } = useParams();

  console.log("OTP ID:", id);

  if (!id) {
    return <h1>No ID found ❌</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>OTP Page</h1>
      <p>ID: {id}</p>
    </div>
  );
}