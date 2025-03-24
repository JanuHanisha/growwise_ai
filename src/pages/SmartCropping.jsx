import React, { useState } from "react";

const SmartCropping = () => {
  const [soilType, setSoilType] = useState("");
  const [locality, setLocality] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRecommend = () => {
    if (!soilType || !locality) {
      alert("❌ Please select both Soil Type and Locality.");
      return;
    }
    setIsLoading(true);
    console.log(`Recommended crops for ${soilType} soil in ${locality} locality.`);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`🌱 Recommended crops for ${soilType} soil in ${locality}:\n\n• Crop A\n• Crop B\n• Crop C\n\nThese crops are well-suited for your area!`);
    }, 1500);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      padding: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        padding: "2.5rem",
        borderRadius: "1.5rem",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        width: "100%",
        maxWidth: "28rem",
        transition: "all 0.3s ease",
        transform: "translateY(0)",
        ":hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        }
      }}>
        {/* Header */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "2rem"
        }}>
          <div style={{
            background: "linear-gradient(45deg, #10b981 0%, #059669 100%)",
            padding: "0.75rem",
            borderRadius: "9999px",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            marginBottom: "1rem",
            animation: "bounce 1s infinite alternate"
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{height: "2.5rem", width: "2.5rem", color: "white"}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 style={{
            fontSize: "1.875rem",
            fontWeight: 700,
            color: "#1f2937",
            background: "linear-gradient(45deg, #059669 0%, #065f46 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Smart Cropping System
          </h2>
          <p style={{color: "#4b5563", marginTop: "0.5rem"}}>Find the perfect crops for your land</p>
        </div>

        {/* Soil Type Dropdown */}
        <div style={{marginBottom: "1.5rem"}}>
          <label style={{
            display: "block",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "#374151",
            marginBottom: "0.5rem",
            marginLeft: "0.25rem"
          }}>Soil Type</label>
          <div style={{position: "relative"}}>
            <select
              style={{
                appearance: "none",
                width: "100%",
                padding: "0.75rem 1rem 0.75rem 1rem",
                borderRadius: "0.75rem",
                border: "1px solid #d1d5db",
                outline: "none",
                backgroundColor: "white",
                color: "#374151",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                transition: "all 0.2s ease",
                ":focus": {
                  boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.5)",
                  borderColor: "transparent"
                },
                ":hover": {
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                }
              }}
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
            >
              <option value="">Select your soil type</option>
              <option value="Sandy">Sandy</option>
              <option value="Clayey">Clayey</option>
              <option value="Loamy">Loamy</option>
              <option value="Black">Black</option>
              <option value="Red">Red</option>
            </select>
            <div style={{
              pointerEvents: "none",
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              display: "flex",
              alignItems: "center",
              paddingRight: "0.75rem",
              color: "#374151"
            }}>
              <svg style={{height: "1.25rem", width: "1.25rem"}} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Locality Dropdown */}
        <div style={{marginBottom: "2rem"}}>
          <label style={{
            display: "block",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "#374151",
            marginBottom: "0.5rem",
            marginLeft: "0.25rem"
          }}>Locality</label>
          <div style={{position: "relative"}}>
            <select
              style={{
                appearance: "none",
                width: "100%",
                padding: "0.75rem 1rem 0.75rem 1rem",
                borderRadius: "0.75rem",
                border: "1px solid #d1d5db",
                outline: "none",
                backgroundColor: "white",
                color: "#374151",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                transition: "all 0.2s ease",
                ":focus": {
                  boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.5)",
                  borderColor: "transparent"
                },
                ":hover": {
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                }
              }}
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
            >
              <option value="">Select your locality</option>
              <option value="Coastal">Coastal</option>
              <option value="Dry Lands">Dry Lands</option>
              <option value="Wet (Humid/Tropical)">Wet (Humid/Tropical)</option>
              <option value="Mountainous">Mountainous</option>
            </select>
            <div style={{
              pointerEvents: "none",
              position: "absolute",
              top: 0,
              right: 0,
              height: "100%",
              display: "flex",
              alignItems: "center",
              paddingRight: "0.75rem",
              color: "#374151"
            }}>
              <svg style={{height: "1.25rem", width: "1.25rem"}} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Recommend Button */}
        <button
          onClick={handleRecommend}
          disabled={isLoading}
          style={{
            width: "100%",
            padding: "0.75rem 1rem",
            borderRadius: "0.75rem",
            fontWeight: 500,
            color: "white",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            transition: "all 0.3s ease",
            transform: "scale(1)",
            outline: "none",
            border: "none",
            cursor: isLoading ? "not-allowed" : "pointer",
            background: isLoading 
              ? "#34d399" 
              : "linear-gradient(45deg, #10b981 0%, #059669 100%)",
            ":hover": !isLoading ? {
              transform: "scale(1.02)",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
            } : {},
            ":focus": {
              boxShadow: "0 0 0 2px rgba(16, 185, 129, 0.5)"
            }
          }}
        >
          {isLoading ? (
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              <svg style={{animation: "spin 1s linear infinite", marginRight: "0.75rem", height: "1.25rem", width: "1.25rem"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle style={{opacity: "0.25"}} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path style={{opacity: "0.75"}} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </div>
          ) : (
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{height: "1.25rem", width: "1.25rem", marginRight: "0.5rem"}} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
              Get Crop Recommendations
            </div>
          )}
        </button>

        {/* Additional Info */}
        <div style={{marginTop: "1.5rem", textAlign: "center", fontSize: "0.875rem", color: "#6b7280"}}>
          <p>GrowWise helps you maximize your agricultural yield</p>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-10px); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SmartCropping;