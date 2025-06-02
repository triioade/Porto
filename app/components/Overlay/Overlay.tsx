import React, { useEffect, useState } from "react";

const TransitionOverlay: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setTimeout(() => setVisible(false), 1200); // Animasi hilang setelah 1.2 detik
  }, []);

  return (
    <div
      className={`transition-overlay ${visible ? "visible" : ""}`}
    />
  );
};

export default TransitionOverlay;
