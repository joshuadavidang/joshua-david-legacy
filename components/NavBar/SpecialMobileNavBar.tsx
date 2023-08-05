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
import { ContactMe } from '@/data/contactMe';
import Link from 'next/link';
import { Icon } from '@/components/Button/Icon';
import React from 'react';

const SpecialMobileNavBar = () => {
  const backgroundColor = useColorModeValue(
    'brand.offWhite',
    'brand.lightsOut'
  );
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
        <div className="flex flex-row">
          {ContactMe.map(
            ({ link, icon, title }, index) =>
              index != 0 &&
              index != ContactMe.length - 1 && (
                <span key={title}>
                  <Link href={link} target="_blank">
                    <Icon
                      label="social media"
                      size="md"
                      colorScheme="gray"
                      variant="ghost"
                      icon={React.createElement(icon)}
                    />
                  </Link>
                </span>
              )
          )}
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
