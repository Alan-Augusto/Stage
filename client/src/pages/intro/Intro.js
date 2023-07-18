import React from 'react';
import { motion } from 'framer-motion';

function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Conteúdo do seu componente */}
    </motion.div>
  );
}

export default MyComponent;
