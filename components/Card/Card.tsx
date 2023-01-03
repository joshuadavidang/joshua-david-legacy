import { Card as ChakraCard, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface CardProps {
  children: any;
}

const Card = ({ children }: CardProps) => {
  const bg = useColorModeValue("brand.white", "");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, ease: "easeOut" }}
    >
      <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
        <ChakraCard bg={bg} borderRadius="12px" maxW="xs" minH="md">
          {children}
        </ChakraCard>
      </div>
    </motion.div>
  );
};

export default Card;
