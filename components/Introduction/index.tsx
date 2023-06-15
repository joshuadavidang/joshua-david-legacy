import { Box, Text, useColorMode } from '@chakra-ui/react';
import { GlowingButton } from '../Button/GlowingButton';
import { useState } from 'react';
import { ButtonIcon } from '../Button/ButtonIcon';

const Introduction = () => {
  const { colorMode } = useColorMode();
  const [showMore, setShowMore] = useState(false);
  const learnMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Box className="flex flex-row justify-center items-center lg:w-1/2 w-4/5 pb-6 lg:pb-8">
        <Text
          fontSize={{ base: '16px', md: '17px', lg: '17px' }}
          lineHeight={8}
          noOfLines={showMore ? 0 : 2}
        >
          Hey 👋🏻 {'I\'m'} Joshua, a <span className="italic">Sophomore</span> at{' '}
          Singapore Management University, majoring in{' '}
          <span className="italic">Information Systems.</span> Ever since my
          polytechnic days, I've developed a deep passion for technology because
          of its ability to enhance the lives of individuals. {'I\'m'} currently
          proficient in front-end development through past internship experience
          and various freelance projects. As an aspiring Software Engineer,{' '}
          {'I\'m'} constantly seeking opportunties for internships to further my
          skills and knowledge in this field.
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
