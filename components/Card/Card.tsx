import { useColorModeValue } from "@chakra-ui/react";
import Box from "../Box/Box";

interface CardProps {
  children: any;
}

const Card = ({ children }: CardProps) => {
  return (
    <Box className="p-6 w-72 h-96 rounded-2xl drop-shadow-md">
      {children}
    </Box>
  );
};

export default Card;
