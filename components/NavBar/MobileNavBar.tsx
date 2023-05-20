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
  Divider,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import Link from 'next/link';
import DarkModeIcon from '../DarkMode/DarkModeIcon';
import { NavLinkData } from '../../data/navLinks';
import { useRouter } from 'next/router';
import { FaHamburger } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const MobileNavBar = () => {
  const backgroundColor = useColorModeValue('brand.offWhite', 'brand.midnight');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Box
        className="flex flex-row justify-between items-center pl-6 w-screen"
        bg={backgroundColor}
      >
        <div className="md:text-3xl text-lg font-sen tracking-tight">
          <Link href="/home">joshuadavid</Link>
        </div>

        <div className="flex flex-row items-center justify-end p-6 gap-2">
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
                <Link href={link} key={id}>
                  <List spacing={1.5}>
                    <ListItem className="p-3">
                      <p>
                        {pathname === link && (
                          <ListIcon as={MdKeyboardDoubleArrowRight} />
                        )}
                        {name}
                      </p>
                    </ListItem>
                    <Divider orientation="horizontal" />
                  </List>
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavBar;
