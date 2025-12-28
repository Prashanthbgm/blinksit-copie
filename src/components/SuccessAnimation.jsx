import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SuccessAnimation() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 2500);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-24 h-24 rounded-full border-4 border-green-600 flex items-center justify-center animate-ping">
        ✔
      </div>
      <h2 className="mt-4 text-2xl font-bold text-green-600">
        Order Placed Successfully
      </h2>
    </div>
  );
}
