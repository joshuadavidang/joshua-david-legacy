import {
  Box,
  useColorMode,
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
import Link from "next/link";
import DarkMode from "../DarkMode/DarkMode";
import { ButtonIcon } from "../Button/ButtonIcon";
import { FaGithub, FaLinkedin, FaFile, FaHamburger } from "react-icons/fa";
import { NavLinkData } from "../../data/navLinks";
import { useRouter } from "next/router";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue("brand.offWhite", "brand.midnight");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const { pathname } = router;

  return (
    <Box
      className={`flex md:justify-between md:flex-row md:gap-5 md:pr-12 md:p-6 w-screen md:items-center 
      flex-col items-end pb-4 pr-6`}
      bg={backgroundColor}
    >
      <div className="flex flex-row gap-2.5">
        <Link
          href="https://github.com/joshuadavidang"
          target="_blank"
          className="md:block hidden"
        >
          <ButtonIcon
            size="sm"
            colorScheme="gray"
            variant="solid"
            leftIcon={<FaGithub />}
          >
            GitHub
          </ButtonIcon>
        </Link>

        <Link
          href="https://linkedin.com/in/joshuadavidang/"
          target="_blank"
          className="md:block hidden"
        >
          <ButtonIcon
            size="sm"
            colorScheme="gray"
            variant="solid"
            leftIcon={<FaLinkedin />}
          >
            LinkedIn
          </ButtonIcon>
        </Link>

        <a download href="/Joshua_David.pdf" className="md:block hidden">
          <ButtonIcon
            size="sm"
            colorScheme="gray"
            variant="solid"
            leftIcon={<FaFile />}
          >
            Resume
          </ButtonIcon>
        </a>
      </div>

      <div className="flex md:flex-row flex-col items-center gap-0.5">
        <span className="hidden md:block">
          <DarkMode />
        </span>

        <Box
          className={`p-2 rounded cursor-pointer ${
            colorMode === "dark"
              ? "hover:bg-gray hover:text-white"
              : "hover:bg-white hover:text-black"
          }`}
          onClick={onOpen}
        >
          <FaHamburger className="w-5 h-5" />
        </Box>

        <Drawer
          placement={"right"}
          isOpen={isOpen}
          onClose={onClose}
          size={"xs"}
        >
          <DrawerOverlay />
          <DrawerContent bg={backgroundColor}>
            <DrawerCloseButton />
            <DrawerHeader />
            <DrawerBody>
              <Stack direction="column" h="100px" p={1}>
                {NavLinkData.map(({ id, link, name, icon }) => (
                  <Link href={link} key={id}>
                    <List spacing={2}>
                      <ListItem
                        className={`p-3 rounded cursor-pointer ${
                          colorMode === "dark"
                            ? "hover:bg-gray hover:text-white"
                            : "hover:bg-white hover:text-black"
                        }`}
                      >
                        {pathname === link && <ListIcon as={icon} />}
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
      </div>
    </Box>
  );
};

export default NavBar;
