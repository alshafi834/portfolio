import type { NextPage } from "next";
import About from "../components/About";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Experience />
    </div>
  );
};

export default Home;
