import Image from "next/image";
// import StillYoung from "../public/assets/images/StillYoung.svg";
import Sayocode from "../public/assets/images/Sayocode.png";
import CompletedTask from "../public/assets/images/CompletedTask.svg";

export const pastProjects = [
  {
    name: "project-52",
    description: "project under construction",
    year: 2555,
    techStack: ["SwiftUI", "iOS development"],
    icon: CompletedTask
  },
  {
    name: "project-51",
    description:
      "spearheaded front-end development of a NFT marketplace, the web app allows users to mint, buy and sell collectibles.",
    year: 2555,
    techStack: ["Next.js", "Web3.js", "MongoDB"],
    icon: CompletedTask
  },
  {
    name: "project-50",
    description:
      "marketplace that enables jewellery collectors to catalogue, maintain, acquire and trade collections.",
    year: 2555,
    techStack: ["React.js", "Express.js", "Firebase"],
    icon: CompletedTask
  },
  {
    name: "still young",
    description:
      "cross-platform mobile app that serves as a one-stop platform for mothers to learn more about confinement practices. with more than 200 downloads, it's now available on App Store & Play Store.",
    year: 2019,
    techStack: ["Ionic", "Express.js"],
    icon: CompletedTask
  },
  {
    name: "sayocode",
    description:
      "built for front-end developers by front-end developers, sayocode automates the process of app creation through a seamless method of dragging and dropping components to a mobile screen of one's choice.",
    year: 2019,
    techStack: ["React.js", "Ionic", "Express.js", "TailwindCss", "MongoDB"],
    icon: Sayocode
  },
];
