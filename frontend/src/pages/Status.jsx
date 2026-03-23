import { useParams } from "react-router-dom";

export default function Status() {
  const { id } = useParams();

  return (
    <div className="container">
      <h2>Status Page</h2>
      <p>Your ID: {id}</p>
      <p>Waiting for admin approval...</p>
    </div>
  );
}