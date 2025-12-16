import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import { DeveloperList } from "./components/DeveloperList";
import { AboutUs } from "./components/AboutUs";
import { ActivitiesList } from "./components/ActivitiesList";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="developerlist">
        <DeveloperList />
      </div>
      <div id="aboutus">
        <AboutUs />
      </div>
      <div id="activitieslist">
        <ActivitiesList />
      </div>
      <div id="contactanos">
        <ActivitiesList />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}