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
} from "@chakra-ui/react";
import PHL from "../../public/assets/images/PHL.svg";
import Image from "next/image";
import { InternshipExperience } from "../../data/internship";

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
          <Image src={PHL} width="130" alt="phl" />
        </Tab>
        <Tab>BSG</Tab>
      </TabList>

      <TabIndicator mt="-1.5px" height="2px" bg="brand.purple" borderRadius="1px" />

      <TabPanels width={100}>
        {InternshipExperience.map(({ id, title, date, task }) => (
          <TabPanel key={id}>
            <Box className="flex flex-col gap-3 text-left">
              <Text as="em" color="brand.purple">
                {title}
              </Text>
              <Text as="sub" color="brand.gray">
                {date}
              </Text>

              <UnorderedList spacing={1.5} pt={3}>
                {task.map((individual, index) => (
                  <ListItem key={index}>{individual}</ListItem>
                ))}
              </UnorderedList>
            </Box>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default Internship;
