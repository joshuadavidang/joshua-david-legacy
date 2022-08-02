import Image from "next/image";
import Post from "../shared/Container";
import Coding from "../public/assets/images/Coding.svg";
import CodingII from "../public/assets/images/CodingII.svg";

export default function LandingPage(props) {
  const { id } = props;

  return (
    <div id={id}>
      <Post>
        <div className="flex flex-col">
          <div className="text-blue1 text-4xl font-sen tracking-tight">
            👋🏻 Joshua David —
          </div>

          <div className="pt-3 leading-relaxed">
            Freshman at the School of Computing and Information Systems,
            <p className="break-words">Singapore Management University</p>
          </div>
        </div>

        <span className="hidden md:block">
          <Image src={Coding} alt="coding" width="350" />
        </span>
      </Post>

      <Post>
        <span className="hidden md:block">
          <Image src={CodingII} alt="coding" width="350" />
        </span>

        <div className="flex flex-col">
          <div className="text-blue1 text-4xl font-sen tracking-tight">
            Aspiring Software Engineer
          </div>

          <div className="pt-3 w-5/6 leading-relaxed">
            Passionate about building tech for public good, my interest lies in
            the field of Software Engineering and Artificial Intelligence. As a
            highly self-motivated individual, {"I'm"} constantly on the lookout
            for opportunities to develop my skillsets.
          </div>
        </div>
      </Post>
    </div>
  );
}
