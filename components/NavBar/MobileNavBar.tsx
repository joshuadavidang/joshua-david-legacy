import {
  Box,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  DrawerHeader,
  DrawerCloseButton,
  Stack,
  List,
  ListItem,
} from '@chakra-ui/react';
import DarkModeIcon from '@/components/DarkMode/DarkModeIcon';
import { NavLinkData } from '@/data/navLinks';
import { FaHamburger } from 'react-icons/fa';
import useScrollToSection from 'hooks/useScrollToSection';

const MobileNavBar = () => {
  const backgroundColor = useColorModeValue('brand.offWhite', 'brand.midnight');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const scrollToSection = useScrollToSection();
  const handleScroll = (id: any) => {
    scrollToSection(id);
    onClose();
  };

  return (
    <>
      <Box
        className="flex flex-row justify-between items-center pl-6 w-screen"
        bg={backgroundColor}
      >
        <div className="text-lg tracking-tight">
          <div onClick={() => handleScroll('landing')}>joshuadavid</div>
        </div>

        <div className="flex flex-row items-center justify-end p-8 gap-2">
          <DarkModeIcon />
          <FaHamburger className="w-5 h-5" onClick={onOpen} />
        </div>
      </Box>

      <Drawer placement={'right'} isOpen={isOpen} onClose={onClose} size={'xs'}>
        <DrawerOverlay />
        <DrawerContent bg={backgroundColor}>
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody>
            <Stack direction="column" h="100px" p={1}>
              {NavLinkData.map(({ id, link, name }) => (
                <div key={id} onClick={() => handleScroll(link)}>
                  <List>
                    <ListItem className="p-3">{name}</ListItem>
                  </List>
                </div>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavBar;
