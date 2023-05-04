import { Box, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import MobileNavBar from "../components/NavBar/MobileNavBar";
import NavBar from "../components/NavBar/NavBar";
import useToggle from "../hooks/useToggle";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function Layout(props: { children: any }) {
  const { children } = props;
  const backgroundColor = useColorModeValue("brand.offWhite", "brand.midnight");

  return (
    <div>
      <Head>
        <title>Joshua David</title>
        <meta name="theme-color" content="#000024" />
        <meta
          name="description"
          content="Undergraduate at the School of Computing and Information Systems, Singapore Management University"
        />

        <meta property="og:title" content="Joshua David" />
        <meta property="og:image" content="//joshuadavid.dev/Banner.png" />
        <meta
          property="og:description"
          content="Undergraduate at the School of Computing and Information Systems, Singapore Management University"
        />
        <meta property="og:url" content="//joshuadavid.dev" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </Head>

      <Box className="relative" bg={backgroundColor}>
        <nav className="fixed hidden md:block z-50">
          <NavBar />
        </nav>

        <nav className="fixed md:hidden block z-50">
          <MobileNavBar />
        </nav>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, ease: "easeIn" }}
        >
          <main>{children}</main>
        </motion.div>

        <Footer />
      </Box>
    </div>
  );
}
