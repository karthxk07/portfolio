import React, { useState, useEffect } from "react";

const SlidingCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the visibility of the card for 500 milliseconds
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`w-64 h-48 bg-gray-200 rounded shadow-md overflow-hidden transition-transform duration-500 ${
        isVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="text-gray-700">Card content goes here...</p>
      </div>
    </div>
  );
};

export default SlidingCard;
