import {
  Tabs,
  Tab,
  TabList,
  TabIndicator,
  TabPanels,
  TabPanel,
  Text,
  ListItem,
  UnorderedList,
  Box,
  Link,
} from '@chakra-ui/react';
import Image from 'next/image';
import { InternshipExperience } from '@/data/internship';
import PigeonLab from '@/images/Internship/PigeonLab.svg';
import { ROLE } from '@/constants/index';
import { motion } from 'framer-motion';

const Internship = () => {
  return (
    <Tabs
      position="relative"
      variant="unstyled"
      size="lg"
      align="center"
      orientation="horizontal"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, ease: 'easeIn' }}
      >
        <TabList>
          <Tab>
            <Image src={PigeonLab} width="130" alt="PigeonLab" />
          </Tab>
          <Tab>
            <Text>BSG</Text>
          </Tab>
        </TabList>

        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="purple"
          borderRadius="1px"
        />
      </motion.div>

      <TabPanels width={100}>
        {InternshipExperience.map(({ id, company, date, link, tasks }) => {
          return (
            <TabPanel key={id}>
              <Box className="flex flex-col gap-1.5 text-left md:max-w-lg">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, ease: 'easeIn' }}
                >
                  <p className="text-md">
                    {ROLE} at{' '}
                    <Link href={link} isExternal>
                      <Text as="i" color="purple">
                        {company}
                      </Text>
                    </Link>
                  </p>
                  <p className="text-gray text-xs">{date}</p>
                </motion.div>

                <UnorderedList spacing={2} pt={3}>
                  {tasks.map((task, index) => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2, ease: 'easeIn' }}
                      key={index}
                    >
                      <ListItem>
                        <Text className="text-sm">{task}</Text>
                      </ListItem>
                    </motion.div>
                  ))}
                </UnorderedList>
              </Box>
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
};

export default Internship;
