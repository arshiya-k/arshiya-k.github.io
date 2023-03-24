import { Inter } from "next/font/google";
import Head from "next/head";
import ImageOne from "@/components/sectionOne";
import ImageTwo from "@/components/sectionTwo";
import ImageThree from "@/components/sectionThree";
import Navigation from "@/components/navBar";
import FeaturedProjects from "@/components/projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Arshiya Khattak | Software Engineer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Navigation />
      <section id="cover">
        <ImageOne />
      </section>
      <section id="about">
        <ImageTwo />
      </section>
      <section id="projects">
        <ImageThree />
      </section>
    </>
  );
}
