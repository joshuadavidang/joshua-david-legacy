import StillYoung from "../public/assets/images/StillYoung.svg";
import Sayocode from "../public/assets/images/Sayocode.png";
import BreadApp from "../public/assets/images/bread_app.png";
import macOS from "../public/assets/images/macOS.png";
import Placeholder from "../public/assets/images/Placeholder.png";

export const PastProjects = [
  {
    name: "Project X",
    description:
      "Development in Progress",
    year: 2023,
    techStack: ["Next.js", "Chakra UI", "Supabase"],
    icon: Placeholder,
    link: "",
  },
  {
    name: "Project Bread",
    description:
      "Google Ignite, 4 weeks product sprint to develop a Flutter-based app that aims to streamline the process of food collection.",
    year: 2022,
    techStack: ["Flutter"],
    icon: BreadApp,
    link: "https://github.com/joshuadavidang/google_ignite_bread",
  },
  {
    name: "Coding Portfolio",
    description:
      "Designed and developed a fully responsive personal portfolio that showcases past projects.",
    year: 2022,
    techStack: ["Next.js", "Tailwind CSS", "Chakra UI", "Supabase"],
    icon: macOS,
    link: "https://github.com/joshuadavidang/joshua-david",
  },
  {
    name: "Project Sayocode",
    description:
      "Web builder that automates the process of app creation through a seamless method of dragging and dropping components to a mobile screen of one's choice.",
    year: 2019,
    techStack: ["React.js", "Ionic", "Express.js", "Tailwind CSS", "MongoDB"],
    icon: Sayocode,
    link: "https://github.com/joshuadavidang/",
  },
  {
    name: "Project Still Young",
    description:
      "Developed a one-stop platform for mothers to learn about confinement practices, features include receipes and quizes.",
    year: 2019,
    techStack: ["Ionic", "TypeScript"],
    icon: StillYoung,
    link: "https://www.straitstimes.com/singapore/app-with-updated-info-on-confinement-period-for-young-mums-launched",
  },
];
