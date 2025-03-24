import React, { useState } from "react";

const OrganicAgriAdvisor = () => {
  const [selectedCrop, setSelectedCrop] = useState("");

  const handleRecommend = () => {
    if (!selectedCrop) {
      alert("❌ Please select a crop to get organic farming advice.");
      return;
    }
    alert(`Fetching organic and sustainable practices for ${selectedCrop}...`);
  };

  const crops = [
    "Wheat", "Oil Seeds", "Millets", "Groundnut", "Pulse",
    "Maize", "Sugarcane", "Cotton", "Tobacco", "Paddy", "Barley"
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #ecfdf5 0%, #ccfbf1 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem"
    }}>
      <div style={{
        background: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(8px)",
        borderRadius: "0.75rem",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        width: "100%",
        maxWidth: "28rem",
        overflow: "hidden",
        border: "1px solid #d1fae5"
      }}>
        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, #059669 0%,rgb(178, 216, 7) 100%)",
          padding: "1.5rem",
          textAlign: "center"
        }}>
          <h2 style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            margin: 0
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{width: "1.5rem", height: "1.5rem"}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Organic Agri Advisor
          </h2>
          <p style={{
            color: "#454B1B		",
            marginTop: "0.25rem",
            fontSize: "0.990rem"
          }}>Get sustainable farming recommendations</p>
        </div>

        {/* Content */}
        <div style={{padding: "1.5rem"}}>
          <div style={{marginBottom: "1.5rem"}}>
            <h3 style={{
              fontSize: "1.125rem",
              fontWeight: "600",
              color: "#065f46",
              marginBottom: "1rem"
            }}>Select a Crop Type:</h3>
            
            {/* Vertical Radio Buttons */}
            <div style={{display: "flex", flexDirection: "column", gap: "0.75rem"}}>
              {crops.map((crop, index) => (
                <label 
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    border: "1px solid",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                    ...(selectedCrop === crop ? {
                      borderColor: "#10b981",
                      backgroundColor: "#ecfdf5",
                      boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)"
                    } : {
                      borderColor: "#e5e7eb",
                      backgroundColor: "white",
                      ":hover": {
                        borderColor: "#a7f3d0",
                        backgroundColor: "#f0fdfa"
                      }
                    })
                  }}
                >
                  <input
                    type="radio"
                    name="crop"
                    value={crop}
                    checked={selectedCrop === crop}
                    onChange={(e) => setSelectedCrop(e.target.value)}
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      color: "#059669",
                      accentColor: "#059669",
                      marginRight: "0.75rem",
                      cursor: "pointer"
                    }}
                  />
                  <span style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: "#374151"
                  }}>
                    {crop}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleRecommend}
            disabled={!selectedCrop}
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              borderRadius: "0.5rem",
              fontWeight: "600",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              ...(selectedCrop ? {
                background: "linear-gradient(135deg, #059669 0%,rgb(159, 221, 14) 100%)",
                color: "white",
                boxShadow: "0 4px 6px -1px rgba(5, 150, 105, 0.3), 0 2px 4px -1px rgba(5, 150, 105, 0.1)",
                ":hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 15px -3px rgba(5, 150, 105, 0.3)"
                }
              } : {
                backgroundColor: "#e5e7eb",
                color: "#9ca3af",
                cursor: "not-allowed"
              })
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" style={{width: "1.25rem", height: "1.25rem", marginRight: "0.5rem"}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Suggest Organic Practices
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrganicAgriAdvisor;