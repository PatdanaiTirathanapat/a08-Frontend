"use client";
import React, { useState } from "react";

const InteractiveCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`rounded-lg p-4 transition-all ${
        isHovered ? "shadow-2xl bg-neutral-200" : "shadow-lg bg-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}  
      onMouseLeave={() => setIsHovered(false)} 
    >
      {children}
    </div>
  );
};

export default InteractiveCard;
