import { Box } from '@chakra-ui/react';
import useScrollToSection from 'hooks/useScrollToSection';
import { IoChevronUp } from 'react-icons/io5';
import { Icon } from '../Button/Icon';
import { useRouter } from 'next/router';

export default function ScrollToTop() {
  const router = useRouter();
  const { pathname } = router;
  const scrollToSection = useScrollToSection();
  const handleScroll = (id: any) => {
    scrollToSection(id);
  };
  return (
    <Box
      className={`flex justify-end pr-12 ${
        pathname !== '/discover' && 'hidden'
      }`}
    >
      <Icon
        variant="solid"
        colorScheme="gray"
        label="scroll-to-top"
        size="md"
        icon={<IoChevronUp />}
        onClick={() => handleScroll('landing')}
      />
    </Box>
  );
}
