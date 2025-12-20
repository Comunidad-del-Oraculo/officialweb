import Hero from "./components/Hero";
import { Developers } from "./components/Developers";
import { AboutUs } from "./components/AboutUs";
import { Activities } from "./components/Activities";
import { ContactUs } from "./components/ContactUs";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AboutUs />
      <Developers />
      <Activities />
      <ContactUs />
    </div>
  );
}
