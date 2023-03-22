import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Project from "./project";
import { BsChevronDoubleDown } from 'react-icons/bs'
import PosiTech from "@/components/images/projects/positech.png";
import FriendQuest from "@/components/images/projects/friendquest.png";
import Islamabad from "@/components/images/projects/islamabad.png";
import longNight from "@/components/images/projects/longNight.png";
import TraViz from "@/components/images/projects/traviz.png";

const projects = [
  {
    name: "PosiTech",
    description: (
      <p>
        In the project, sentiment analysis was conducted to gather insights
        about the stock market. Data was collected from multiple APIs such as
        the News API, Twitter API, and Reddit APIs. The end product of this is a
        Flask application that utilized a{" "}
        <b>Long Short-Term Memory Network model</b> created with{" "}
        <b>TensorFlow/Keras</b> libraries and the Yahoo! Finance API to optimize
        stock investments through portfolio management.
      </p>
    ),
    image: PosiTech.src,
    link: "https://github.com/arshiya-k/PosiTech",
  },
  {
    name: "Real Estate Price Predictor",
    link: "https://github.com/arshiya-k/IslamabadPropertyPrediction",
    description: (
      <p>
        The project involved developing a <b>Flask</b> web application to
        predict real estate prices in Islamabad, Pakistan using a real-estate
        dataset. The data was cleaned, manipulated and visualized using{" "}
        <b>Numpy</b>, Pandas and Matplotlib. Various machine learning models,
        including <b>linear regression</b>, <b>lasso</b>, and{" "}
        <b>decision tree</b> models, were implemented using Scikit-Learn
        library. GridSearchCV was utilized for hyperparameter tuning to optimize
        the models performance. The project combined data cleaning,
        visualization, and machine learning techniques to create an easy-to-use
        interface for predicting real estate prices in Islamabad.
      </p>
    ),
    image: Islamabad.src,
  },
  {
    name: "The Long Night",
    link: "https://github.com/arshiya-k/theLongNight",
    image: longNight.src,
    description: (
      <p>
        A 2D shooter game for desktop computers that was based on the popular
        HBO series Game of Thrones. The game was created using <b>Python</b> and
        the <b>Processing</b> library. Specialized projectile motion was
        implemented for both the player character and the randomly generated
        enemies. To increase the difficulty of gameplay, the game uses
        mathematical algorithms that progressively increased the number and
        speed of the randomly generated enemies.
      </p>
    ),
  },
  {
    name: "TraViz",
    link: "https://github.com/arshiya-k/TraViz",
    image: TraViz.src,
    description: (
      <p>
        A web application meant to serve as a both a trip-planner and diary.
        Developed the front-end and back end of the web-application,
        implementing interactive map of users&apos; travel history in Javascript,
        with visualizations of user locations being produced through{" "}
        <b>p5.js</b>, <b>MapBox</b> and <b>LocationIQ</b> APIs.
      </p>
    ),
  },
  {
    name: "FriendQuest",
    link: "https://github.com/arshiya-k/FriendQuest",
    description: (
      <p>
        A social web application created using <b>Next.js</b> for the front-end,
        with a <b>custom back-end API</b> and <b>MongoDB</b> for data storage.
        One of the key features of the application was the integration of the{" "}
        <b>Google Places API</b>, which allowed users to receive real-time
        location suggestions based on their input. To ensure secure user access,
        it also uses <b>NextAuth</b> to utilize Google authentication.
      </p>
    ),
    image: FriendQuest.src,
  },
];

function FeaturedProjects() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-400vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
            <div className="scroll-section scroll-intro">
                <h1>Featured Projects</h1>
                <div className="arrow">
                <BsChevronDoubleDown/>
                </div>
            </div>
          {projects.map((project) => {
            return (
              <Project
                key={project.name}
                name={project.name}
                description={project.description}
                img={project.image}
                link={project.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
