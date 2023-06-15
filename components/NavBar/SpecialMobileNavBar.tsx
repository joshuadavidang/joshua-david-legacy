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
import { FaHamburger } from 'react-icons/fa';
import { useRouter } from 'next/router';

const SpecialMobileNavBar = () => {
  const backgroundColor = useColorModeValue('brand.offWhite', 'brand.midnight');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const handleRoute = () => {
    router.push('/discover');
    onClose();
  };
  
  return (
    <>
      <Box
        className="flex flex-row justify-between items-center pl-6 w-screen"
        bg={backgroundColor}
      >
        <div className="text-lg tracking-tight">
          <div onClick={() => handleRoute()}>joshuadavid</div>
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
              <div onClick={() => handleRoute()}>
                <List spacing={1.5}>
                  <ListItem className="p-3">Discover</ListItem>
                </List>
              </div>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SpecialMobileNavBar;
