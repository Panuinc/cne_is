"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function UIAnimatedText({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div className="text-xl text-primary">{children}</div>;

  return (
    <motion.div
      className="flex items-center justify-center w-full h-full p-2 gap-2 text-xl text-primary"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {children}
    </motion.div>
  );
}
