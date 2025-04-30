"use client";

import { Button } from "@relume_io/relume-ui";
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const Circle = () => {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });
  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [0.85, 1], ["#ccc", "#000"]),
  };
  return (
    <div className="absolute flex h-full w-8 items-start justify-center md:-ml-24 md:w-24 lg:-ml-32 lg:w-32">
      <motion.div
        ref={circleRef}
        style={backgroundColor}
        className="z-20 mt-7 size-4 rounded-full shadow-[0_0_0_8px_#fff] md:mt-8"
      />
    </div>
  );
};

export function Timeline3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="relative grid auto-cols-fr grid-cols-1 items-start justify-center gap-6 sm:gap-12 md:grid-cols-2 md:gap-24 lg:gap-32">
          <div className="relative top-0 z-10 md:sticky md:top-20 md:z-auto md:pr-4">
            <p className="mb-3 font-semibold md:mb-4">Milestones</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Key Research Milestones and Achievements
            </h1>
            <p className="md:text-md">
              Explore our significant research milestones that have shaped our
              journey. Each achievement reflects our commitment to advancing
              ecological and evolutionary science.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Explore"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Explore
              </Button>
            </div>
          </div>
          <div className="absolute z-0 flex h-full w-8 flex-col items-center justify-self-start [grid-area:2/1/3/2] md:z-auto md:justify-self-center md:[grid-area:auto]">
            <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-background-primary to-transparent" />
            <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-neutral-black" />
            <div className="h-full w-[3px] bg-neutral-lighter" />
            <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-background-primary" />
            <div className="absolute top-[-50vh] h-[50vh] w-full bg-background-primary" />
          </div>
          <div className="grid auto-cols-fr gap-x-12 gap-y-8 sm:gap-y-12 md:gap-x-20 md:gap-y-20">
            <div className="relative">
              <Circle />
              <div className="mt-4 ml-12 grid auto-cols-fr grid-cols-1 gap-8 md:ml-0 md:gap-12">
                <div>
                  <h2 className="mb-3 text-4xl leading-[1.2] font-bold md:mb-4 md:text-5xl lg:text-6xl">
                    2020
                  </h2>
                  <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Research Initiative Launch
                  </h3>
                  <p>
                    In 2020, we launched a groundbreaking initiative focused on
                    climate change impacts. This project aims to understand
                    ecological responses to shifting environments.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Details" variant="secondary">
                      Details
                    </Button>
                    <Button
                      title="More Info"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      More Info
                    </Button>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <img
                    className="w-full rounded-image"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="mt-4 ml-12 grid auto-cols-fr grid-cols-1 gap-8 md:ml-0 md:gap-12">
                <div>
                  <h2 className="mb-3 text-4xl leading-[1.2] font-bold md:mb-4 md:text-5xl lg:text-6xl">
                    2021
                  </h2>
                  <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Publication Milestone
                  </h3>
                  <p>
                    Our team published several influential papers in leading
                    journals in 2021. These publications have contributed
                    significantly to the field of evolutionary ecology.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Read" variant="secondary">
                      Read
                    </Button>
                    <Button
                      title="View"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      View
                    </Button>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <img
                    className="w-full rounded-image"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 2"
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="mt-4 ml-12 grid auto-cols-fr grid-cols-1 gap-8 md:ml-0 md:gap-12">
                <div>
                  <h2 className="mb-3 text-4xl leading-[1.2] font-bold md:mb-4 md:text-5xl lg:text-6xl">
                    2022
                  </h2>
                  <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    International Collaboration
                  </h3>
                  <p>
                    In 2022, we expanded our research through international
                    collaborations. These partnerships have enhanced our
                    research capabilities and broadened our impact.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Join" variant="secondary">
                      Join
                    </Button>
                    <Button
                      title="Connect"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Connect
                    </Button>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <img
                    className="w-full rounded-image"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 3"
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <Circle />
              <div className="mt-4 ml-12 grid auto-cols-fr grid-cols-1 gap-8 md:ml-0 md:gap-12">
                <div>
                  <h2 className="mb-3 text-4xl leading-[1.2] font-bold md:mb-4 md:text-5xl lg:text-6xl">
                    2023
                  </h2>
                  <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Future Directions
                  </h3>
                  <p>
                    Looking ahead to 2023, we are focusing on innovative
                    research methodologies. Our goal is to address emerging
                    ecological challenges with cutting-edge solutions.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button title="Discover" variant="secondary">
                      Discover
                    </Button>
                    <Button
                      title="Learn"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Learn
                    </Button>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <img
                    className="w-full rounded-image"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
