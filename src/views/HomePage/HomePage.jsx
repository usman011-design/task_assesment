import React from "react";
import { NavBar } from "../../components/Navbar";
import { ProjectCard } from "../../components/InfoSection";
import { ImageSection } from "../../components/ImageSection/ImageSection";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-black">
      <div className="flex flex-col w-full">
        {/* Navigation */}
        <NavBar />

        {/* Main Content Container */}
        <main className="w-full">
          <div className="container mx-auto">
            <ProjectCard
              year="2023"
              categories={["UI/UX", "WOW Website", "Visual Brand", "Identity"]}
              title="Wild"
              link="https://example.com"
            />
          </div>

          <ImageSection />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
