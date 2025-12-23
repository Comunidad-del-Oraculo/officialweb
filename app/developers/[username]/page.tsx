"use client";
import { useParams } from "next/navigation";
import { getDeveloperByUsername } from "@/lib/functions/getDevelopers";

import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Tags from "./components/Tags";
import Projects from "./components/Projects";

const Page = () => {
  const params = useParams<{ username: string }>();
  const developer = getDeveloperByUsername(params.username);

  if (!developer) {
    return <div>Developer not found</div>;
  }

  return (
    <div className="flex flex-1 h-full flex-col items-center w-full bg-linear-to-tl from-accent/5 to-white">
      <div className="flex flex-col gap-4 py-20 px-6 max-w-3xl">
        <Profile developer={developer} />
        <Tags tags={developer.tags} />
        <About about={developer.about} />
        <Projects projects={developer.projects} />
        <Experience experience={developer.experience} />
        <Education education={developer.certifications} />
        <Skills skills={developer.skills} />
      </div>
    </div>
  );
};

export default Page;
