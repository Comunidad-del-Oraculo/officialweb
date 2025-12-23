import { FaTools } from "react-icons/fa";

interface SkillsProps {
  skills: {
    languages: string[];
    frontend: string[];
    backend: string[];
    databases: string[];
    devops: string[];
    uiux: string[];
  };
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <div className="flex flex-col gap-2 text-wrap w-full mx-auto">
      <div className="flex gap-2 items-center">
        <FaTools />
        <h3 className=" font-semibold uppercase">Skills</h3>
      </div>
      <div className="flex flex-col px-2">
        <div className="flex gap-4 ">
          <div className="flex gap-2">
            <h3 className="font-semibold">Lenguages:</h3>
            <div className="flex flex-col flex-wrap md:flex-row">
              {skills.languages.map((language) => (
                <div key={language} className="pr-2">
                  {language}
                </div>
              ))}
            </div>
          </div>
        </div>
        {skills.frontend && (
          <div className="flex gap-2">
            <h3 className="font-semibold">Frontend:</h3>
            <div className="flex flex-col flex-wrap md:flex-row">
              {skills.frontend.map((frontend) => (
                <div key={frontend} className="pr-2">
                  {frontend}
                </div>
              ))}
            </div>
          </div>
        )}
        {skills.backend && (
          <div className="flex gap-2">
            <h3 className="font-semibold">Backend:</h3>
            <div className="flex flex-col flex-wrap md:flex-row">
              {skills.backend.map((backend) => (
                <div key={backend} className="pr-2">
                  {backend}
                </div>
              ))}
            </div>
          </div>
        )}
        {skills.databases && (
          <div className="flex gap-2">
            <h3 className="font-semibold">Base de Datos:</h3>
            <div className="flex flex-col flex-wrap md:flex-row">
              {skills.databases.map((databases) => (
                <div key={databases} className="pr-2">
                  {databases}
                </div>
              ))}
            </div>
          </div>
        )}
        {skills.devops && (
          <div className="flex gap-2">
            <h3 className="font-semibold">Devops:</h3>
            <div className="flex flex-col flex-wrap md:flex-row">
              {skills.devops.map((devops) => (
                <div key={devops} className="pr-2">
                  {devops}
                </div>
              ))}
            </div>
          </div>
        )}
        {skills.uiux && (
          <div className="flex gap-2">
            <h3 className="font-semibold">UI | UX:</h3>
            <div className="flex flex-col flex-wrap md:flex-row">
              {skills.uiux.map((uiux) => (
                <div key={uiux} className="pr-2">
                  {uiux}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
