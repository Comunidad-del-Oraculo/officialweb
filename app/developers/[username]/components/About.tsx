import { FaUserTie } from "react-icons/fa";

const About = ({ about }: { about: string }) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-center">
        <FaUserTie />
        <h3 className="uppercase font-semibold">Acerca de</h3>
      </div>
      <p className="text-wrap">{about}</p>
    </div>
  );
};

export default About;
