import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (mobile.length === 10) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        console.log(`Sending OTP to ${mobile}`);
        navigate("/verify-otp", { state: { username, mobile } });
        setIsLoading(false);
      }, 1500);
    } else {
      alert("Please enter a valid 10-digit mobile number!");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #f0fff4 0%, #d1fae5 100%)",
      padding: "20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{
        background: "white",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "400px",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        ":hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)"
        }
      }}>
        {/* Header */}
        <div style={{
          padding: "30px",
          textAlign: "center",
          background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
          color: "white"
        }}>
          <div style={{
            width: "60px",
            height: "60px",
            margin: "0 auto 15px",
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              style={{ width: "30px", height: "30px" }} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 style={{ margin: "0", fontSize: "1.75rem", fontWeight: "700" }}>Welcome Back</h2>
          <p style={{ margin: "8px 0 0", opacity: "0.9", fontSize: "0.95rem" }}>Sign in to access your farming dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSendOTP} style={{ padding: "30px" }}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              color: "#374151",
              fontSize: "0.95rem"
            }} htmlFor="username">
              Username
            </label>
            <div style={{ position: "relative" }}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                style={{
                  position: "absolute",
                  left: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "18px",
                  height: "18px",
                  color: "#9ca3af"
                }} 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{
                  width: "80%",
                  padding: "12px 15px 12px 45px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  backgroundColor: "#f9fafb",
                  ":focus": {
                    outline: "none",
                    borderColor: "#10b981",
                    boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.2)",
                    backgroundColor: "white"
                  }
                }}
              />
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              color: "#374151",
              fontSize: "0.95rem"
            }} htmlFor="mobile">
              Mobile Number
            </label>
            <div style={{ position: "relative" }}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                style={{
                  position: "absolute",
                  left: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "18px",
                  height: "18px",
                  color: "#9ca3af"
                }} 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <input
                id="mobile"
                type="tel"
                placeholder="Enter 10-digit mobile number"
                value={mobile}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  if (value.length <= 10) setMobile(value);
                }}
                required
                style={{
                  width: "80%",
                  padding: "12px 15px 12px 45px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  backgroundColor: "#f9fafb",
                  ":focus": {
                    outline: "none",
                    borderColor: "#10b981",
                    boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.2)",
                    backgroundColor: "white"
                  }
                }}
              />
            </div>
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
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              transition: "all 0.3s ease",
              ":hover": !isLoading ? {
                background: "linear-gradient(135deg, #0ea371 0%, #047857 100%)",
                transform: "translateY(-2px)",
                boxShadow: "0 5px 15px rgba(16, 185, 129, 0.3)"
              } : {},
              ":disabled": {
                background: "#9ca3af",
                cursor: "not-allowed"
              }
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg 
                  className="spinner" 
                  xmlns="http://www.w3.org/2000/svg" 
                  style={{ 
                    width: "20px", 
                    height: "20px",
                    animation: "spin 1s linear infinite"
                  }} 
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="42" strokeDashoffset="16"></circle>
                </svg>
                Sending OTP...
              </>
            ) : (
              "Send OTP"
            )}
          </button>
        </form>

        {/* Footer */}
        <div style={{
          padding: "20px 30px",
          textAlign: "center",
          borderTop: "1px solid #e5e7eb",
          fontSize: "0.9rem",
          color: "#6b7280"
        }}>
          <p>Don't have an account? <a href="/signup" style={{
            color: "#10b981",
            fontWeight: "600",
            textDecoration: "none",
            transition: "color 0.3s ease",
            ":hover": {
              color: "#059669",
              textDecoration: "underline"
            }
          }}>Sign up</a></p>
        </div>

        {/* Animation styles */}
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

export default SignIn;