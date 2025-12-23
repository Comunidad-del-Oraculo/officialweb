import Image from "next/image";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface Developer {
  avatar: string;
  name: string;
  role: string;
  availability: string;
  location: {
    city: string;
    country: string;
  };
  social: {
    portfolio: string;
    github: string;
    linkedin: string;
    twitter: string;
  };
}

const Profile = ({ developer }: { developer: Developer }) => {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <Image
          src={developer.avatar || ""}
          width={100}
          height={100}
          alt={`Foto perfil de ${developer.name}`}
          className="w-30 h-30 rounded-full object-cover"
        />
        <div
          className={`w-4 h-4 absolute bottom-0 right-0 rounded-full  text-center text-black hover:w-full hover:rounded-lg transition-all duration-200 cursor-pointer ${
            developer.availability === "Open to work" || developer.availability === "Part-time"
              ? "bg-green-500"
              : developer.availability === "Not available"
              ? "bg-red-600"
              : developer.availability === "Freelance only" ?
              "bg-amber-300 ":""
          }`}
        >
          <p className="font-semibold text-sm opacity-0 hover:opacity-100 hover:delay-100 transition-all duration-100">
            {developer.availability}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1 font-light">
        <h3 className="text-xl font-bold">{developer.name}</h3>
        <p>{developer.role}</p>
        <p>
          {developer.location.city} - {developer.location.country}
        </p>
        <div className="flex gap-4 mt-1">
          {developer.social.portfolio !== "" && (
            <a href={developer.social.portfolio} className="hover:text-accent hover:scale-120 transition-all duration-300">
              <FaGlobe />
            </a>
          )}
          {developer.social.github !== "" && (
            <a href={developer.social.github} className="hover:text-accent hover:scale-120 transition-all duration-300">
              <FaGithub />
            </a>
          )}
          {developer.social.linkedin !== "" && (
            <a href={developer.social.linkedin} className="hover:text-accent hover:scale-120 transition-all duration-300">
              <FaLinkedin />
            </a>
          )}
          {developer.social.twitter !== "" && (
            <a href={developer.social.twitter} className="hover:text-accent hover:scale-120 transition-all duration-300">
              <FaXTwitter />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
