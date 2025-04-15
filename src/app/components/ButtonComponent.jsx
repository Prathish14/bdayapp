"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ButtonComponent = () => {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "linear-gradient(to bottom right, #ffcccb, #ffe4e1, #f8f9fa)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          backgroundColor: "#ff69b4",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "scale(1.1)";
          e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        }}
        onClick={() => router.push("/photo-uploader")}
      >
        Click Me!!!
      </button>

      <footer
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          padding: "10px 0",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          fontSize: "14px",
        }}
      >
        © 2025 Birthday Wishes. All rights reserved.
      </footer>
    </div>
  );
};

export default ButtonComponent;
