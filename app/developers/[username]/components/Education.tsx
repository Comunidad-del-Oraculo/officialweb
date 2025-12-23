import { FaGraduationCap } from "react-icons/fa6";
interface EducationProps {
  education: Array<{
    title: string;
    organization: string;
    year: number;
  }>;
}
const Education = ({ education }: EducationProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <FaGraduationCap />
        <h3 className="uppercase font-semibold">Educación</h3>
      </div>
      <div className="pl-1">
        {education.map((edu) => (
          <div key={edu.title} className="border-l border-accent/40 pl-2">
            <p className="font-semibold">{edu.title}</p>
            <p className="font-light text-gray-500 text-sm">{`${edu.organization} - ${edu.year}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
