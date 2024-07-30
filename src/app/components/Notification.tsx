"use client";

import React, { useEffect } from 'react';

interface NotificationProps {
  message: string;
  show: boolean;
  onClose: () => void;
  backgroundColor: string;
}

const Notification: React.FC<NotificationProps> = ({ message, show, onClose, backgroundColor }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <div
      className={`fixed bottom-4 right-4 py-2 px-4 rounded shadow-lg transition-opacity duration-300 ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundColor }}
    >
      {message}
    </div>
  );
};

export default Notification;