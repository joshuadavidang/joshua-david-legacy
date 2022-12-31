import { useColorModeValue } from "@chakra-ui/react";
import Text from "../Text/Text";

interface CardHeaderProps {
  children: any;
}

const CardHeader = ({ children }: CardHeaderProps) => {
  const color = useColorModeValue("#ffffff", "#000000");

  return (
    // <p className="pb-2 pt-3 text-2xl text-white dark:text-blue1 text-left font-bold tracking-loose">
    //   <span className="hover:border-b-2 pb-0.5">{children}</span>
    // </p>
    <Text className=" text-2xl pb-2 pt-3 font-bold tracking-loose">{children}</Text>
  );
};

export default CardHeader;
