import React from 'react';
import './ClientTicker.css';

const clients = [
  { name: "MASTERS' UNION", color: "#ADFF00" }, // Electric Lime
  { name: "FINTECH BRAND", color: "#00F0FF" },  // Cyan Punch
  { name: "CONTENT STUDIO", color: "#FF007A" }, // Neon Rose
  { name: "WAYWEN", color: "#C5A3FF" },         // Muted Purple
  { name: "TECH STARTUP", color: "#BFFCC6" },   // Pastel Mint
  { name: "CREATOR ECONOMY", color: "#FFD1DC" } // Peach
];

const ClientTicker = () => {
  return (
    <div className="ticker-wrapper">
      <div className="ticker-label">TRUSTED BY</div>
      <div className="ticker-content">
        <div className="ticker-track">
          {[...clients, ...clients].map((client, index) => (
            <span 
              key={index} 
              className="ticker-item" 
              style={{ '--brand-color': client.color }}
            >
              {client.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientTicker;