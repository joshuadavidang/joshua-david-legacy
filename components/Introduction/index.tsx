import { Box, Text, useColorMode } from '@chakra-ui/react';
import { GlowingButton } from '../Button/GlowingButton';
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
      <Box className="flex flex-row justify-center items-center lg:w-3/5 w-11/12 pb-6 lg:pb-12">
        <Text
          fontSize={{ base: '16px', md: '17px', lg: '17px' }}
          lineHeight={9}
          noOfLines={showMore ? 0 : 3}
        >
          Hey there 👋🏻 I'm Joshua, a Sophomore at Singapore Management
          University, majoring in Information Systems. Since my polytechnic
          days, I've discovered a passion for technology and its ability to make
          a positive impact on people's lives. I'm particularly passionate about
          front-end development, and I've gained valuable experience through
          internships and freelancing. As an aspiring Software Engineer, I'm
          constantly on the lookout for exciting opportunities to develop my
          skills and knowledge in the field. If you're interested in
          collaborating, or have an opportunity in mind, feel free to drop me a
          message{' '}
          <span className="border-b-2">
            <Link href="/contact">here</Link>
          </span>
          !
        </Text>
      </Box>

      {colorMode === 'dark' ? (
        <GlowingButton
          onClick={learnMore}
          paddingX="px-4"
          paddingY="py-3"
          textSize="text-md"
        >
          {showMore ? 'Show Less' : 'Learn More'}
        </GlowingButton>
      ) : (
        <ButtonIcon
          size="md"
          variant="solid"
          isDisabled={false}
          colorScheme="telegram"
          onClick={learnMore}
        >
          {showMore ? 'Show Less' : 'Learn More'}
        </ButtonIcon>
      )}
    </>
  );
};

export default Introduction;
