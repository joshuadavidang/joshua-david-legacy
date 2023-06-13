import { Box, useColorMode } from '@chakra-ui/react';
import useScrollToSection from 'hooks/useScrollToSection';
import { IoChevronUp } from 'react-icons/io5';
import { Icon } from '../Button/Icon';
import { useRouter } from 'next/router';

export default function ScrollToTop() {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const { pathname } = router;
  const scrollToSection = useScrollToSection();
  const handleScroll = (id: any) => {
    scrollToSection(id);
  };
  return (
    <Box
      className={`flex justify-end pr-8 ${
        pathname !== '/discover' && 'hidden'
      }`}
    >
      <Icon
        variant="solid"
        colorScheme={`${colorMode === 'dark' ? 'gray' : 'telegram'}`}
        label="scroll-to-top"
        size="md"
        icon={<IoChevronUp />}
        onClick={() => handleScroll('about')}
      />
    </Box>
  );
}
