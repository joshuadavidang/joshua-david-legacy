import { Box, Text, useColorMode } from '@chakra-ui/react';
import { ButtonIcon } from '../Button/ButtonIcon';
import Link from 'next/link';
import useToggle from 'hooks/useToggle';

const Introduction = () => {
  const { colorMode } = useColorMode();
  const [showMore, handleToggle] = useToggle();

  return (
    <>
      <Box className="flex flex-row justify-center items-center lg:w-3/5 w-11/12 pb-6 lg:pb-8">
        <Box className="flex flex-col gap-12" noOfLines={showMore ? 0 : 3}>
          <Text
            fontSize={{ base: '15px', md: '16px', lg: '16px' }}
            lineHeight={8}
          >
            Hey, I'm Joshua! Currently a Sophomore at Singapore Management
            University, majoring in Information Systems. Since I was a child,
            I've been amazed by how technology works and its potential to make a
            positive impact on people's lives. I'm particularly fond of web and
            mobile application development, and I've actively built projects
            over the years. When I'm not coding, you can find me either at the
            gym or simply brewing a cup of coffee with a V60. As an aspiring
            Software Engineer, I'm always on the lookout for opportunities to
            expand my knowledge in this field. If you're interested in
            collaborating, or have an opportunity in mind, feel free to drop me
            a message{' '}
            <span
              className={`border-b hover:opacity-90 ${
                colorMode === 'dark' ? 'border-white' : 'border-black'
              }`}
            >
              <Link href="/contact">here</Link>
            </span>
            !
          </Text>
        </Box>
      </Box>

      <ButtonIcon
        size="sm"
        variant="solid"
        isDisabled={false}
        colorScheme="gray"
        onClick={handleToggle}
      >
        {showMore ? 'Show Less' : 'Learn More'}
      </ButtonIcon>
    </>
  );
};

export default Introduction;
