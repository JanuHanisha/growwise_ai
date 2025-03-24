import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { username, mobile } = location.state || {};

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (otp === "1234") {  // Mock OTP verification
        alert("Login Successful!");
        navigate("/"); // Redirect to home page
      } else {
        alert("Invalid OTP! Please try again.");
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #f0fff4 0%, #d1fae5 100%)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{
        background: "white",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "400px",
        padding: "40px",
        textAlign: "center"
      }}>
        <div style={{
          width: "80px",
          height: "80px",
          margin: "0 auto 20px",
          background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <h2 style={{
          margin: "0 0 10px",
          fontSize: "24px",
          fontWeight: "600",
          color: "#065f46"
        }}>
          Verify Your OTP
        </h2>

        <p style={{
          margin: "0 0 30px",
          color: "#6b7280",
          fontSize: "16px"
        }}>
          We've sent a 4-digit code to <span style={{ fontWeight: "600", color: "#065f46" }}>+91 {mobile}</span>
        </p>

        <form onSubmit={handleVerifyOTP} style={{ marginBottom: "20px" }}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "30px"
          }}>
            {[1, 2, 3, 4].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={otp[index] || ""}
                onChange={(e) => {
                  const newOtp = otp.split("");
                  newOtp[index] = e.target.value.replace(/\D/g, '');
                  setOtp(newOtp.join("").substring(0, 4));
                  // Auto focus next input
                  if (e.target.value && index < 3) {
                    document.getElementById(`otp-input-${index + 1}`).focus();
                  }
                }}
                id={`otp-input-${index}`}
                style={{
                  width: "60px",
                  height: "60px",
                  fontSize: "24px",
                  textAlign: "center",
                  border: "2px solid #d1fae5",
                  borderRadius: "8px",
                  outline: "none",
                  transition: "all 0.3s ease",
                  ":focus": {
                    borderColor: "#10b981",
                    boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.2)"
                  }
                }}
                required
              />
            ))}
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              ":hover": {
                background: "linear-gradient(135deg, #0ea371 0%, #047857 100%)",
                transform: "translateY(-2px)",
                boxShadow: "0 5px 15px rgba(16, 185, 129, 0.3)"
              },
              ":disabled": {
                background: "#9ca3af",
                cursor: "not-allowed",
                transform: "none",
                boxShadow: "none"
              }
            }}
            disabled={isLoading || otp.length < 4}
          >
            {isLoading ? (
              <>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  style={{ animation: "spin 1s linear infinite" }}
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
                Verifying...
              </>
            ) : (
              "Verify OTP"
            )}
          </button>
        </form>

        <p style={{
          color: "#6b7280",
          fontSize: "14px",
          margin: "0"
        }}>
          Didn't receive code? <a 
            href="#" 
            style={{
              color: "#10b981",
              fontWeight: "600",
              textDecoration: "none",
              ":hover": {
                textDecoration: "underline"
              }
            }}
          >
            Resend OTP
          </a>
        </p>

        <style>
          {`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default VerifyOTP;