"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header47() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Innovate</p>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              Exploring Ecological Frontiers
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md">
              At I-DEEL, we are dedicated to advancing the understanding of
              ecological and evolutionary processes. Our mission is to conduct
              innovative research that addresses critical environmental
              challenges.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Learn More">Learn More</Button>
              <Button title="Join Us" variant="secondary">
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
