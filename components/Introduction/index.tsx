import { Box, Text, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';
import { ButtonIcon } from '../Button/ButtonIcon';
import Link from 'next/link';

const Introduction = () => {
  const { colorMode } = useColorMode();
  const [showMore, setShowMore] = useState(false);
  const learnMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Box className="flex flex-row justify-center items-center lg:w-3/5 w-11/12 pb-6 lg:pb-8">
        <Box className="flex flex-col gap-12" noOfLines={showMore ? 0 : 3}>
          <Text
            fontSize={{ base: '15px', md: '16px', lg: '16px' }}
            lineHeight={8}
          >
            Currently a Sophomore at Singapore Management University, majoring
            in Information Systems. Since young, I've had a passion for
            technology due to its potential to bring positive changes to
            people's lives. I'm particularly fond of web/mobile application
            development and I've actively built projects over the years. During
            my free time, you can find me either at the gym or simply brewing a
            cup of coffee with a v60. As an aspiring Software Engineer, I'm
            constantly on the lookout for opportunities to develop my skills and
            knowledge in the field. If you're interested in collaborating, or
            have an opportunity in mind, feel free to drop me a message{' '}
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
        onClick={learnMore}
      >
        {showMore ? 'Show Less' : 'Learn More'}
      </ButtonIcon>
    </>
  );
};

export default Introduction;
