import { Box } from '@chakra-ui/react';

interface GlowingButtonProps {
  onClick: () => void;
  children: string;
}

export const GlowingButton = ({ onClick, children }: GlowingButtonProps) => {
  return (
    <Box className="relative group" onClick={onClick}>
      <Box
        className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
    rounded-lg blur opacity-75 group-hover:opacity-100
    transition duration-500 group-hover:duration-200 animate-tilt"
      />

      <button className="relative py-5 px-12 bg-black w-full rounded-lg leading-none">
        <p className="text-lg">{children}</p>
      </button>
    </Box>
  );
};
