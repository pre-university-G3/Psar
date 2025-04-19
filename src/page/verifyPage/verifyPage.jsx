// src/pages/VerifyEmail.jsx
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await fetch(`/api/v1/auth/verify-email?token=${token}`, {
          method: "POST",
        });
        if (!response.ok) throw new Error("Verification failed");
        alert("Email verified! You can now log in.");
        navigate("/login");
      } catch (err) {
        alert(err.message);
      }
    };
    verifyEmail();
  }, [token, navigate]);

  return <div>Verifying your email...</div>;
};

export default VerifyEmail;