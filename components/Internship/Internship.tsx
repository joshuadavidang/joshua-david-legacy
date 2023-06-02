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

const Internship = () => {
  return (
    <Tabs
      position="relative"
      variant="unstyled"
      size="lg"
      align="center"
      orientation="horizontal"
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
        bg="brand.purple"
        borderRadius="1px"
      />

      <TabPanels width={100}>
        {InternshipExperience.map(({ id, company, date, link, tasks }) => {
          return (
            <TabPanel key={id}>
              <Box className="flex flex-col gap-2 text-left md:max-w-lg">
                <p className="text-md">
                  {ROLE} at{' '}
                  <Link href={link} isExternal>
                    <Text as="i" color="brand.purple">
                      {company}
                    </Text>
                  </Link>
                </p>
                <p className="text-lightGray text-xs">{date}</p>
                <UnorderedList spacing={2} pt={3}>
                  {tasks.map((task, index) => (
                    <ListItem key={index}>
                      <Text className='text-sm'>{task}</Text>
                    </ListItem>
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
