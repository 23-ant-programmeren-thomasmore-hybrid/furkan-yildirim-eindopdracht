import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Hobbies from "@/components/hobbies";
import Manifesto from "@/components/manifesto";
import Header from "@/components/header";



export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header />
      <Intro />
      <SectionDivider/>
      <About/>
      <Manifesto/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Hobbies/>
      <Contact/>
      
    </main>
  )
}
