import { Card as ChakraCard } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface CardProps {
  children: any;
}

const Card = ({ children }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, ease: "linear" }}
    >
      <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
        <ChakraCard borderRadius="12px" maxW="xs" minH="md">
          {children}
        </ChakraCard>
      </div>
    </motion.div>
  );
};

export default Card;
