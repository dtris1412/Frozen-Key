import React from "react";
import "../styles/toast.css";

const Toast = ({ message, type = "success", onClose }) => {
  if (!message) return null;
  return (
    <div className={`toast toast-${type}`}>
      <span>{message}</span>
      <button className="toast-close" onClick={onClose}>
        ×
      </button>
    </div>
  );
};

export default Toast;
