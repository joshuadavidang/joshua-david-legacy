import { Box, Text, useColorMode } from '@chakra-ui/react';
import { ButtonIcon } from '@/components/Button/ButtonIcon';
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
            lineHeight={7}
          >
            Hey, I'm Joshua, I'm a Sophomore at Singapore Management University,
            majoring in Information Systems. I'm an incoming Software Engineer
            Intern @ GovTech Singapore, under the Government Digital Services
            (GDS) division, working on CrowdTaskSG. Outside of work, I enjoy
            working out at the gym and going for runs in the city. As an
            aspiring software engineer, I'm constantly looking for opportunites
            to expand my knowledge in this field. If you're interested in
            collaborating, or have an opportunity in mind, feel free to drop me
            a message{' '}
            <span
              className={`border-b ${
                colorMode === 'dark' ? 'border-white' : 'border-black'
              }`}
            >
              <Link href="/contact">here</Link>
            </span>
            .
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
