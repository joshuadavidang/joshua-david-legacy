import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Head from 'next/head';
import MobileNavBar from '@/components/NavBar/MobileNavBar';
import NavBar from '@/components/NavBar/NavBar';
import { motion, useScroll, useSpring } from 'framer-motion';
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';
import SpecialNavBar from '@/components/NavBar/SpecialNavBar';
import SpecialMobileNavBar from '@/components/NavBar/SpecialMobileNavBar';
import { Icon } from '@/components/Button/Icon';
import { IoChevronUp } from 'react-icons/io5';
import useScrollToSection from 'hooks/useScrollToSection';

export default function Layout(props: { children: any }) {
  const { children } = props;
  const router = useRouter();
  const { pathname } = router;
  const { colorMode } = useColorMode();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollToSection = useScrollToSection();
  const handleScroll = (id: any) => {
    scrollToSection(id);
  };

  const backgroundColor = useColorModeValue('brand.offWhite', 'brand.midnight');

  return (
    <div>
      <Head>
        <meta name="theme-color" content="#000024" />
        <meta
          name="description"
          content="Sophomore at the School of Computing and Information Systems, Singapore Management University"
        />

        <meta property="og:title" content="Joshua David" />
        <meta property="og:image" content="//joshuadavid.dev/Banner.png" />
        <meta
          property="og:description"
          content="Sophomore at the School of Computing and Information Systems, Singapore Management University"
        />
        <meta property="og:url" content="//joshuadavid.dev" />
        <meta name="author" content="Joshua David" />

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
        <link rel="manifest" href="/favicon_io/manifest.json" />
      </Head>

      <Box className="relative" bg={backgroundColor}>
        <nav
          className={`fixed ${
            pathname !== '/discover' && 'hidden'
          } md:block z-50`}
        >
          <motion.div
            className={`progress-bar ${
              colorMode === 'dark' ? 'bg-white' : 'bg-black'
            } `}
            style={{ scaleX }}
          />
          <NavBar />
        </nav>

        <nav
          className={`fixed ${
            pathname !== '/discover' ? 'hidden' : 'block'
          } md:hidden z-50`}
        >
          <MobileNavBar />
        </nav>

        <nav
          className={`fixed ${
            pathname !== '/discover' && 'md:block'
          } hidden z-50`}
        >
          <SpecialNavBar />
        </nav>

        <nav
          className={`fixed ${
            pathname !== '/discover' ? 'block' : 'hidden'
          } md:hidden z-50`}
        >
          <SpecialMobileNavBar />
        </nav>

        <main>{children}</main>

        <Box className="flex justify-end pr-8 pb-6">
          <Icon
            variant="solid"
            colorScheme={`${colorMode === 'dark' ? 'gray' : 'telegram'}`}
            label="scroll-to-top"
            size="md"
            icon={<IoChevronUp />}
            onClick={() => handleScroll('about')}
          />
        </Box>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, ease: 'easeIn' }}
        >
          <Footer />
        </motion.div>
      </Box>
    </div>
  );
}
