import StillYoung from "../public/assets/images/StillYoung.svg";
import Sayocode from "../public/assets/images/Sayocode.png";
import BreadApp from "../public/assets/images/bread_app.png";

export const pastProjects = [
  {
    name: "bread",
    description:
      "Google Ignite, 4 weeks product sprint to develop a Flutter-based app.",
    year: 2022,
    techStack: ["Flutter"],
    icon: BreadApp,
  },
  {
    name: "sayocode",
    description:
      "web builder that automates the process of app creation through a seamless method of dragging and dropping components to a mobile screen of one's choice",
    year: 2019,
    techStack: ["React.js", "Ionic", "Express.js", "TailwindCss", "MongoDB"],
    icon: Sayocode,
  },
  {
    name: "still young",
    description:
      "mobile app that serves as a one-stop platform for mothers to learn about confinement practices",
    year: 2019,
    techStack: ["Ionic"],
    icon: StillYoung,
  },
];
