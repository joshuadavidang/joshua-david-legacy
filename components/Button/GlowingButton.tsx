import { Box } from '@chakra-ui/react';

interface GlowingButtonProps {
  onClick: () => void;
  children: string;
  paddingX: string;
  paddingY: string;
  textSize: string;
}

export const GlowingButton = ({
  onClick,
  children,
  paddingX,
  paddingY,
  textSize,
}: GlowingButtonProps) => {
  return (
    <Box className="relative group" onClick={onClick}>
      <Box
        className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
    rounded-lg blur opacity-75 group-hover:opacity-100
    transition duration-500 group-hover:duration-200 animate-tilt"
      />

      <button
        className={`relative ${paddingX} ${paddingY} bg-black w-full rounded-lg leading-none`}
      >
        <p className={textSize}>{children}</p>
      </button>
    </Box>
  );
};
