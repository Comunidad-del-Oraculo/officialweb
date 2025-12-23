import { FaBriefcase } from "react-icons/fa6";
interface ExperienceProps {
  experience: Array<{
    position: string;
    company: string;
    start: string;
    end: string;
    description: string;
  }>;
}

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-center">
        <FaBriefcase />
        <h3 className="uppercase font-semibold">Experiencia</h3>
      </div>
      {experience.map((exp) => (
        <div key={exp.company} className="flex mt-2 items-start pl-1">
          <div className="flex flex-col border-l border-s-accent/40 px-2">
            <p className="font-semibold">{exp.position}</p>
            <p className="text-sm">{exp.company}</p>
            <p className="text-sm text-gray-500">
              {exp.start} - {exp.end}
            </p>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
