import '../styles/globals.css';
import Layout from './index';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../components/DarkMode/theme';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ ease: 'easeIn' }}
      >
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </motion.div>
    </AnimatePresence>
  );
}
