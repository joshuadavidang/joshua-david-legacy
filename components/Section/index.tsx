import { Box } from '@chakra-ui/react';

const Section = (props: { id: any, children: any }) => {
  const { id, children } = props;
  return (
    <Box
      className="flex flex-col justify-center items-center w-screen px-4 py-16 lg:py-20"
      id={id}
    >
      {children}
    </Box>
  );
};

export default Section;
