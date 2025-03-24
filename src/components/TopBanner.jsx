import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";

const TopBanner = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    navigate("/");
    setActiveNav("");
  };

  const navItems = [
    { path: "/smart-cropping", name: "Smart Cropping", icon: "🌱" },
    { path: "/organic-advisor", name: "Organic Advisor", icon: "🌿" },
    { path: "/budget-plan", name: "Budget Plan", icon: "💰" },
    { path: "/agro-market", name: "Agro Market", icon: "🛒" }
  ];

  return (
    <div style={{
      background: scrolled 
        ? "rgba(159, 226, 191, 0.95)" 
        : "linear-gradient(135deg, #9FE2BF 0%, #40E0D0 100%)",
      padding: scrolled ? "10px 40px" : "15px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      backdropFilter: "blur(8px)",
      borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.2)" : "none"
    }}>
      <div style={{ 
        display: "flex", 
        alignItems: "center",
        gap: "30px"
      }}>
        <div 
          onClick={handleLogoClick}
          style={{ 
            cursor: "pointer",
            transition: "transform 0.3s ease",
            ":hover": {
              transform: "scale(1.1) rotate(-5deg)"
            }
          }}
        >
          <Logo />
        </div>
        
        <div style={{
          display: "flex",
          gap: "5px",
          alignItems: "center"
        }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{ 
                fontWeight: 600,
                fontSize: "24px",
                padding: "12px 20px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: activeNav === item.path ? "#ffffff" : "#2d3748",
                textDecoration: "none",
                background: activeNav === item.path 
                  ? "linear-gradient(135deg, #2E8B57 0%, #3CB371 100%)" 
                  : "transparent",
                position: "relative",
                overflow: "hidden",
                ":hover": {
                  color: "#ffffff",
                  transform: "translateY(-3px)",
                  background: "linear-gradient(135deg, #2E8B57 0%, #3CB371 100%)",
                  boxShadow: "0 6px 12px rgba(46, 139, 87, 0.3)"
                },
                "::before": {
                  content: `"${item.icon}"`,
                  fontSize: "18px",
                  transition: "transform 0.3s ease"
                },
                ":hover::before": {
                  transform: "scale(1.2) rotate(15deg)"
                },
                "::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  background: "#ffffff",
                  transform: activeNav === item.path ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.4s ease"
                }
              }}
              onClick={() => setActiveNav(item.path)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      
      <Link to="/signin">
        <button style={{ 
          padding: "15px 30px",
          background: "linear-gradient(135deg, #2E8B57 0%, #3CB371 100%)",
          color: "white",
          border: "none",
          borderRadius: "50px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "600",
          letterSpacing: "0.5px",
          boxShadow: "0 4px 15px rgba(46, 139, 87, 0.4)",
          transition: "all 0.3s ease",
          position: "relative",
          overflow: "hidden",
          ":hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 6px 20px rgba(46, 139, 87, 0.6)",
            background: "linear-gradient(135deg, #3CB371 0%, #2E8B57 100%)"
          },
          ":active": {
            transform: "translateY(0)"
          },
          "::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
            transform: "translateX(-100%)",
            transition: "0.5s"
          },
          ":hover::after": {
            transform: "translateX(100%)"
          }
        }}>
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default TopBanner;