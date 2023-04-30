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
} from "@chakra-ui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import DarkMode from "../DarkMode/DarkMode";
import { NavLinkData } from "../../data/navLinks";

const MobileNavBar = () => {
  const backgroundColor = useColorModeValue("brand.offWhite", "brand.midnight");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        className="flex flex-row justify-between items-center pl-6 w-screen"
        bg={backgroundColor}
      >
        <div className="md:text-3xl text-lg font-sen tracking-tight">
          <Link href="/home">joshuadavid</Link>
        </div>

        <div className="flex flex-row items-center justify-end p-6 gap-4">
          <DarkMode />
          <Bars3Icon className="w-7 h-7" onClick={onOpen} />
        </div>
      </Box>

      <Drawer placement={"right"} isOpen={isOpen} onClose={onClose} size={"xs"}>
        <DrawerOverlay />
        <DrawerContent bg={backgroundColor}>
          <DrawerCloseButton />
          <DrawerHeader />
          <DrawerBody>
            <Stack direction="column" h="100px" p={1}>
              {NavLinkData.map(({ id, link, name, icon }) => (
                <Link href={link} key={id}>
                  <List spacing={3}>
                    <ListItem
                      className="p-3"
                    >
                      <ListIcon as={icon} />
                      {name}
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
