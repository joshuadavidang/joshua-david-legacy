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
  Avatar,
} from '@chakra-ui/react';
import Image from 'next/image';
import { InternshipExperience } from '@/data/internship';
import PigeonLab from '@/images/Internship/PigeonLab.png';
import { ROLE } from '@/constants/index';
import { motion } from 'framer-motion';
import { BsCodeSlash } from 'react-icons/bs';

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
            <Image src={PigeonLab} width="30" alt="PigeonLab" />
          </Tab>
          <Tab>
            <Avatar size="sm" icon={<BsCodeSlash />} />
          </Tab>
        </TabList>

        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="brand.purple"
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
                    {ROLE} @{' '}
                    <Link href={link} isExternal>
                      <Text as="i" color="brand.purple">
                        {company}
                      </Text>
                    </Link>
                  </p>
                  <p className="text-gray text-xs pt-1.5">{date}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, ease: 'easeIn' }}
                >
                  {tasks.length == 1 ? (
                    <Text className="text-sm pt-3">{tasks[0]}</Text>
                  ) : (
                    <UnorderedList spacing={2} pt={3}>
                      {tasks.map((task, index) => (
                        <ListItem key={index}>
                          <Text className="text-sm">{task}</Text>
                        </ListItem>
                      ))}
                    </UnorderedList>
                  )}
                </motion.div>
              </Box>
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
};

export default Internship;
