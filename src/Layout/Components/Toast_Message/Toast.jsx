// Toast.js
import  { useState, useEffect } from 'react';

const Toast = ({ message, show, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 5000); 

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    isVisible && (
      <div className="fixed bottom-4 right-4 bg-amber-800 text-white px-4 py-2 rounded opacity-90 z-50 transition-opacity my-56">
        {message}
      </div>
    )
  );
};

export default Toast;
