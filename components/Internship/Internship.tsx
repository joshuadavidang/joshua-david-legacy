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
  // useColorMode,
} from "@chakra-ui/react";
import Image from "next/image";
import { InternshipExperience } from "../../data/internship";
import PigeonLab from "../../public/assets/images/Internship/PigeonLab.svg";
// import CynapseLight from "../../public/assets/images/Internship/CynapseLight.png";
// import CynapseDark from "../../public/assets/images/Internship/CynapseDark.png";

const Internship = () => {
  // const { colorMode } = useColorMode();
  return (
    <Tabs
      position="relative"
      variant="unstyled"
      size="lg"
      align="center"
      orientation="horizontal"
    >
      <TabList>
        {/* <Tab>
          <Image
            src={colorMode === "dark" ? CynapseLight : CynapseDark}
            width="100"
            alt="Cynapse"
          />
        </Tab> */}
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
        {InternshipExperience.map(({ id, title, date, link, tasks }) => {
          const data = title.split("Software Engineer Intern at");
          const company = data[data.length - 1];
          return (
            <TabPanel key={id}>
              <Box className="flex flex-col gap-2 text-left">
                <p className="text-lg">
                  Software Engineer Intern at{" "}
                  <Link href={link} isExternal>
                    <Text as="i" color="brand.purple">
                      {company}
                    </Text>
                  </Link>
                </p>
                <p className="text-lightGray text-sm">{date}</p>
                <UnorderedList spacing={1.5} pt={3}>
                  {tasks.map((task, index) => (
                    <ListItem key={index}>
                      <Text>{task}</Text>
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
