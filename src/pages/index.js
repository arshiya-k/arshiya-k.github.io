import { Inter } from 'next/font/google';
import ImageOne from '@/components/sectionOne';
import ImageTwo from '@/components/sectionTwo';
import ImageThree from '@/components/sectionThree';
import Navigation from '@/components/navBar';
import FeaturedProjects from '@/components/projects';

// console.log(ImageOne);
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navigation/>
      {/* <p>is anything compiling</p> */}
      <section id="cover">
        <ImageOne/>
      </section>
      <section id="about">
        <ImageTwo/>
      </section>
      {/* <FeaturedProjects/> */}
      <section id="projects">
        <ImageThree/>
      </section>
    </>
  )
}
