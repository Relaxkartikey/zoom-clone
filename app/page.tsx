import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Work } from "@/components/work";
import { SocialManagement } from "@/components/social-management";
import { Services } from "@/components/services";
import { Experience } from "@/components/experience";
import { Tools } from "@/components/tools";
import { EducationWorkStyle } from "@/components/education-workstyle";
import { CaseStudies } from "@/components/case-studies";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <SocialManagement />
        <Services />
        <Experience />
        <Tools />
        <EducationWorkStyle />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
