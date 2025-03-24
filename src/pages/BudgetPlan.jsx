import React, { useState } from "react";

const BudgetPlan = () => {
  const [budget, setBudget] = useState("");
  const [budgetPlan, setBudgetPlan] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePlan = () => {
    const budgetValue = parseFloat(budget);
    if (isNaN(budgetValue) || budgetValue <= 0) {  // ✅ Fixed: Added missing closing parenthesis
      alert("❌ Please enter a valid budget amount.");
      return;
    }

    setIsGenerating(true);
    
    // Simulate processing delay
    setTimeout(() => {
      const budgetDistribution = {
        Seeds: (budgetValue * 0.25).toFixed(2),
        Fertilizers: (budgetValue * 0.30).toFixed(2),
        Labour: (budgetValue * 0.20).toFixed(2),
        Irrigation: (budgetValue * 0.15).toFixed(2),
        Transport: (budgetValue * 0.10).toFixed(2),
      };
      
      setBudgetPlan(budgetDistribution);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <div style={{
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        borderRadius: "1.5rem",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        padding: "2rem",
        width: "100%",
        maxWidth: "32rem",
        textAlign: "center",
        border: "1px solid rgba(5, 150, 105, 0.2)"
      }}>
        {/* Header with animated icon */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "1.5rem"
        }}>
          <div style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
            boxShadow: "0 4px 6px -1px rgba(5, 150, 105, 0.3), 0 2px 4px -1px rgba(5, 150, 105, 0.1)",
            animation: "pulse 2s infinite"
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
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <h2 style={{
            fontSize: "1.75rem",
            fontWeight: "700",
            color: "transparent",
            background: "linear-gradient(135deg, #065f46 0%, #047857 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            margin: "0"
          }}>
            Smart Budget Planner
          </h2>
          <p style={{
            color: "#4b5563",
            marginTop: "0.5rem",
            fontSize: "0.95rem"
          }}>
            Optimize your farming expenses efficiently<br></br>
            <b>The Indian Council of Agricultural Research (ICAR)</b> follows standardized budgeting measures for crop cultivation, categorizing costs into seeds, fertilizers, irrigation, labor, machinery, and marketing. Typically, seed costs account for 10-20%, fertilizers 20-30%, irrigation 10-15%, labor 25-35%, machinery 5-15%, and transportation 5-10% of the total budget. 
          </p>
        </div>

        {/* Budget Input */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{
            display: "block",
            fontSize: "1rem",
            fontWeight: "600",
            color: "#374151",
            marginBottom: "0.75rem"
          }}>
            Enter Your Budget (₹):
          </label>
          <div style={{ position: "relative" }}>
            <span style={{
              position: "absolute",
              left: "1rem",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#6b7280",
              fontWeight: "500"
            }}>
              ₹
            </span>
            <input
              type="number"
              placeholder="e.g. 50000"
              style={{
                width: "90%",
                padding: "0.75rem 1rem 0.75rem 2.5rem",
                borderRadius: "0.75rem",
                border: "1px solid #d1fae5",
                fontSize: "1rem",
                fontWeight: "500",
                outline: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.05)",
                ":focus": {
                  borderColor: "#10b981",
                  boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.2)"
                }
              }}
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
        </div>

        {/* Generate Plan Button */}
        <button
          onClick={handleGeneratePlan}
          disabled={isGenerating || !budget}
          style={{
            width: "100%",
            padding: "0.990rem",
            borderRadius: "0.856rem",
            fontSize: "1rem",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...(isGenerating || !budget ? {
              backgroundColor: "#e5e7eb",
              color: "#9ca3af",
              cursor: "not-allowed"
            } : {
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              color: "white",
              boxShadow: "0 4px 6px -1px rgba(5, 150, 105, 0.3)",
              ":hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 10px 15px -3px rgba(5, 150, 105, 0.3)"
              }
            })
          }}
        >
          {isGenerating ? (
            <>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                style={{ marginRight: "0.5rem", animation: "spin 1s linear infinite" }}
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              Generating...
            </>
          ) : (
            <>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                style={{ marginRight: "0.5rem" }}
              >
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Generate Budget Plan
            </>
          )}
        </button>

        {/* Budget Visualization */}
        {budgetPlan && (
          <div style={{ marginTop: "2rem" }}>
            <h3 style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              color: "#065f46",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem"
            }}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
              Your Budget Allocation
            </h3>
            
            {/* Circular Budget Chart */}
            <div style={{
              width: "200px",
              height: "200px",
              margin: "0 auto 1.5rem",
              position: "relative",
              borderRadius: "50%",
              background: "conic-gradient(" +
                "#86efac 0% 25%, " + // Seeds
                "#4ade80 25% 55%, " + // Fertilizers
                "#34d399 55% 75%, " + // Labour
                "#10b981 75% 90%, " + // Irrigation
                "#059669 90% 100%)"   // Transport
            }}>
              <div style={{
                position: "absolute",
                width: "70%",
                height: "70%",
                background: "white",
                borderRadius: "50%",
                top: "15%",
                left: "15%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.1)"
              }}>
                <span style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#065f46"
                }}>
                  ₹{budget}
                </span>
                <span style={{
                  fontSize: "0.75rem",
                  color: "#6b7280"
                }}>
                  Total Budget
                </span>
              </div>
            </div>
            
            {/* Budget Breakdown */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "0.75rem",
              marginTop: "1rem"
            }}>
              {Object.entries(budgetPlan).map(([category, amount], index) => {
                const colors = ["#86efac", "#4ade80", "#34d399", "#10b981", "#059669"];
                return (
                  <div key={category} style={{
                    backgroundColor: colors[index],
                    padding: "0.75rem",
                    borderRadius: "0.5rem",
                    color: "white",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column"
                  }}>
                    <span style={{
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      marginBottom: "0.25rem"
                    }}>{category}</span>
                    <span style={{
                      fontSize: "1rem",
                      fontWeight: "700"
                    }}>₹{amount}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Global styles for animations */}
        <style jsx global>{`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default BudgetPlan;