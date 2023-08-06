import { Box } from '@chakra-ui/react';
import useScrollToSection from 'hooks/useScrollToSection';
import { BsFillRocketFill } from 'react-icons/bs';
import { Icon } from '@/components/Button/Icon';
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
        icon={<BsFillRocketFill />}
        onClick={() => handleScroll('landing')}
      />
    </Box>
  );
}
