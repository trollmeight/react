import React from "react";
import "./App.css";

const lanyard: React.FC = () => {
  return (
    <div className="image">
     <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white relative">
      <div className="max-w-2xl p-6 bg-gray-800 rounded-lg shadow-lg relative z-10">
      <a href="https://discord.com/users/1266754182082461751">
      <img src="https://lanyard.cnrad.dev/api/1266754182082461751?&theme=dark&showDisplayName=false" />
      </a>
      </div>
      </div>
    </div>
  );
};

export default lanyard;
