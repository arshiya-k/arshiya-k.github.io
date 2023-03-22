import { Parallax } from "react-parallax";
import flowerOne from "@/components/images/flower.png";
import React, { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { useMediaQuery } from 'react-responsive'


// console.log(flowerOne)


function TypingEffect() {
  const words = [
    "a software engineer",
    "a data scientist",
    "a full-stack web developer",
    "a data engineer",
    "an AI/ML Researcher"
  ];
  return (
    <>
    <h2>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("I am\n")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(800)
            //   .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
            let i = 0;
            setInterval(() => {
                typewriter
                  .callFunction(() => {
                    console.log('Word deleted!');
                  })
                  .typeString(words[i] + '.\n')
                  .callFunction(() => {
                    console.log('Word typed out!');
                  })
                  .pauseFor(800)
                  .deleteChars(words[i].length + 2)
                  .start();
                i = (i + 1) % words.length;
              }, 5000);

        }}
      />
    </h2>
    </>
  );
}

const ImageOne = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <Parallax
      className="image"
      bgImage={flowerOne.src}
      strength={800}
      bgImageStyle={{ minHeight: "100vh" }}
    >
      <div className="content-one">
        <h1 className="introduction">Hi, my name is Arshiya.</h1>
        <TypingEffect />
      </div>
    </Parallax>
  );
};

export default ImageOne;
