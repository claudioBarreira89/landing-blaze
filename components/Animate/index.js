import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Animate = ({ children, ...props }) => {
  const ref = useRef(null);
  useInView(ref);

  return <motion.div {...props}>{children}</motion.div>;
};

export default Animate;
