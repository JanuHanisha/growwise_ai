import React from "react";
import { useNavigate } from "react-router-dom";

const CoverPage = () => {
  return (
    <div style={{
      background: "linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem"
    }}>
      <div style={{
        background: "rgba(255, 255, 255, 0.95)",
        borderRadius: "1.5rem",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        padding: "3rem",
        maxWidth: "800px",
        textAlign: "center",
        transition: "all 0.3s ease",
        transform: "translateY(0)",
        ":hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.25)"
        }
      }}>
        <div style={{
  background: "linear-gradient(45deg, #10b981 0%, #059669 100%)",
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  marginBottom: "1.5rem",
  animation: "bounce 2s infinite alternate",
  position: "relative"
}}>
  <div style={{
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "linear-gradient(45deg, #10b981 0%, #059669 100%)",
    borderRadius: "50%"
  }}></div>
  <img 
    src="https://cdn-icons-png.flaticon.com/512/2919/2919592.png"
    alt="GrowWise Logo"
    style={{
      width: "60%",
      height: "60%",
      objectFit: "contain",
      position: "relative",
      zIndex: "1"
    }}
  />
</div>
        
        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: "800",
          color: "transparent",
          background: "linear-gradient(45deg, #059669 0%, #065f46 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          marginBottom: "1rem",
          lineHeight: "1.2"
        }}>
          Welcome to GrowWise AI
        </h1>
        
        <div style={{
          position: "relative",
          marginBottom: "2rem"
        }}>
          <div style={{
            position: "absolute",
            top: "50%",
            left: "0",
            right: "0",
            height: "2px",
            background: "linear-gradient(90deg, rgba(16, 185, 129, 0) 0%, rgba(16, 185, 129, 0.5) 50%, rgba(16, 185, 129, 0) 100%)",
            transform: "translateY(-50%)"
          }}></div>
          <div style={{
            display: "inline-block",
            padding: "0 1rem",
            background: "white",
            position: "relative",
            zIndex: "10"
          }}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              style={{width: "24px", height: "24px", color: "#10b981"}} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" 
              />
            </svg>
          </div>
        </div>
        
        <p style={{
          fontSize: "1.125rem",
          color: "#4b5563",
          lineHeight: "1.75",
          marginBottom: "2rem"
        }}>
          GrowWiseAI is an AI-driven agricultural solution designed to empower small and marginal farmers by providing smart recommendations for sustainable farming. It utilizes machine learning to predict the best crops based on soil type and locality, estimate cultivation costs, and suggest organic farming alternatives instead of chemical fertilizers.
        </p>
        
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "2rem"
        }}>
          {[
            "🌱 Smart Crop Recommendations",
            "💰 Cost Estimation",
            "🌿 Organic Alternatives",
            "📊 Real-time Insights",
            "📈 Marketing Strategies",
            "🌍 Eco-friendly Practices"
          ].map((feature, index) => (
            <div 
              key={index}
              style={{
                background: "rgba(16, 185, 129, 0.1)",
                color: "#065f46",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                transition: "all 0.2s ease",
                ":hover": {
                  transform: "translateY(-2px)",
                  background: "rgba(16, 185, 129, 0.2)"
                }
              }}
            >
              {feature}
            </div>
          ))}
        </div>
        

<button 
  onClick={() => navigate('/signin')}
  style={{
    background: "linear-gradient(45deg, #10b981 0%, #059669 100%)",
    color: "white",
    padding: "0.75rem 2rem",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 6px -1px rgba(16, 185, 129, 0.3), 0 2px 4px -1px rgba(16, 185, 129, 0.1)",
    transition: "all 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    ":hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 10px 15px -3px rgba(16, 185, 129, 0.3)"
    }
  }}
>
  Get Started
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    style={{width: "20px", height: "20px", marginLeft: "0.5rem"}} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M14 5l7 7m0 0l-7 7m7-7H3" 
    />
  </svg>
</button>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default CoverPage;