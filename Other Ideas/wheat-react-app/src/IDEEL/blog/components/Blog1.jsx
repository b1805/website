"use client";

import React from "react";

export function Blog1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="md:mb-18 mb-12 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h1 className="lg:text-10xl mb-5 text-6xl font-bold md:mb-6 md:text-9xl">
              Latest Insights in Ecology
            </h1>
            <p className="md:text-md">
              Discover our latest posts on ecology and evolution.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center justify-start overflow-scroll pl-[5vw] md:mb-16 md:ml-0 md:w-full md:justify-center md:overflow-hidden md:pl-0">
            <a
              href="#"
              className="rounded-button inline-flex gap-3 items-center justify-center whitespace-nowrap transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none text-text-primary bg-background-primary border px-4 py-2 border-border-primary"
            >
              View all
            </a>
            <a
              href="#"
              className="rounded-button inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none text-text-primary gap-2 bg-transparent border px-4 py-2 border-transparent"
            >
              Ecology Research
            </a>
            <a
              href="#"
              className="rounded-button inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none text-text-primary gap-2 bg-transparent border px-4 py-2 border-transparent"
            >
              Evolution Studies
            </a>
            <a
              href="#"
              className="rounded-button inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none text-text-primary gap-2 bg-transparent border px-4 py-2 border-transparent"
            >
              Interdisciplinary Topics
            </a>
            <a
              href="#"
              className="rounded-button inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none text-text-primary gap-2 bg-transparent border px-4 py-2 border-transparent"
            >
              Recent Findings
            </a>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            <div>
              <a href="#" className="mb-6 inline-block w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="rounded-image aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <a
                href="#"
                className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
              >
                Research
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  Understanding Ecosystem Dynamics and Their Impacts
                </h5>
              </a>
              <p>Explore how ecosystems adapt and evolve over time.</p>
              <div className="mt-6 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar 1"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">Jane Doe</h6>
                  <div className="flex items-center">
                    <p className="text-sm">11 Jan 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">5 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a href="#" className="mb-6 inline-block w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="rounded-image aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <a
                href="#"
                className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
              >
                Ecology
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  The Role of Biodiversity in Ecosystem Health
                </h5>
              </a>
              <p>Learn why biodiversity is crucial for ecosystem resilience.</p>
              <div className="mt-6 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar 1"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">John Smith</h6>
                  <div className="flex items-center">
                    <p className="text-sm">15 Feb 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">7 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a href="#" className="mb-6 inline-block w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="rounded-image aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <a
                href="#"
                className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
              >
                Evolution
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  Adapting to Climate Change: A Survival Guide
                </h5>
              </a>
              <p>
                Discover strategies species use to cope with climate shifts.
              </p>
              <div className="mt-6 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar 1"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">Alice Johnson</h6>
                  <div className="flex items-center">
                    <p className="text-sm">20 Mar 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">6 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a href="#" className="mb-6 inline-block w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="rounded-image aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <a
                href="#"
                className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
              >
                Interdisciplinary
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  Collaborative Research: Bridging Disciplines for Better
                  Solutions
                </h5>
              </a>
              <p>
                Explore how collaboration enhances research outcomes and
                innovation.
              </p>
              <div className="mt-6 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar 1"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">Mark Lee</h6>
                  <div className="flex items-center">
                    <p className="text-sm">05 Apr 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">4 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a href="#" className="mb-6 inline-block w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="rounded-image aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <a
                href="#"
                className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
              >
                Ecology
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  The Impact of Urbanization on Wildlife Habitats
                </h5>
              </a>
              <p>
                Understand how urban growth affects local wildlife and
                ecosystems.
              </p>
              <div className="mt-6 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar 1"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">Sarah Brown</h6>
                  <div className="flex items-center">
                    <p className="text-sm">15 May 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">8 min read</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a href="#" className="mb-6 inline-block w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="rounded-image aspect-[3/2] size-full object-cover"
                  />
                </div>
              </a>
              <a
                href="#"
                className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
              >
                Research
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">
                  Innovations in Conservation: Protecting Our Planet's Future
                </h5>
              </a>
              <p>
                Learn about groundbreaking conservation techniques making a
                difference today.
              </p>
              <div className="mt-6 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar 1"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">Tom Green</h6>
                  <div className="flex items-center">
                    <p className="text-sm">30 Jun 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">9 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
