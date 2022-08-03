import NavBar from "../components/NavBar";
import Card from "../shared/Card";
import Chip from "../shared/Chip";

export default function Projects() {
  let techStack = ["React.js", "Next.js", "TailwindCss"];

  return (
    <div className="relative bg-white dark:bg-black overflow-hidden">
      <header className="fixed hidden md:block">
        <NavBar />
      </header>

      <main className="md:px-36 md:py-16 pt-16 h-screen w-screen">
        <Card>
          <Chip chipLabel={techStack} />
        </Card>
      </main>
    </div>
  );
}
