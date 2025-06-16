import React, { useEffect, useState } from 'react';

const CountdownAlert = ({ children, duration = 9000, type = 'info' }) => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  // Tailwind-safe static background classes for progress bar
  const typeColors = {
    info: { bg: 'bg-blue-100', border: 'border-blue-400', text: 'text-blue-700', bar: 'bg-blue-500' },
    success: { bg: 'bg-green-100', border: 'border-green-400', text: 'text-green-700', bar: 'bg-green-500' },
    warning: { bg: 'bg-yellow-100', border: 'border-yellow-400', text: 'text-yellow-700', bar: 'bg-yellow-500' },
    danger: { bg: 'bg-red-100', border: 'border-red-400', text: 'text-red-700', bar: 'bg-red-500' },
  };

  const colors = typeColors[type] || typeColors.info;

  useEffect(() => {
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = 100 - (elapsed / duration) * 100;
      setProgress(Math.max(0, pct));

      if (elapsed >= duration) {
        clearInterval(interval);
        setVisible(false);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className={`relative p-4 mb-4 border-l-4 rounded ${colors.bg} ${colors.border} ${colors.text} font-cambria`}>
      <div className="flex justify-between items-start">
        <div>{children}</div>
        <button
          className="ml-4 text-xl font-bold focus:outline-none"
          onClick={() => setVisible(false)}
        >
          &times;
        </button>
      </div>
      <div className="mt-2 h-1 w-full bg-gray-300 rounded overflow-hidden">
        <div
          className={`h-full ${colors.bar} transition-all duration-100 linear`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default CountdownAlert;
