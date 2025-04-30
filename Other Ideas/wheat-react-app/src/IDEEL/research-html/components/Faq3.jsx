"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Explore our frequently asked questions to understand our research
            and methodologies better.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is I-DEEL?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              I-DEEL stands for Inter-Disciplinary Ecology and Evolution Lab. We
              focus on innovative research that bridges various fields of
              ecology and evolution. Our goal is to enhance understanding of
              complex biological systems.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              Who leads the lab?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              The lab is headed by Dr. Shinichi Nakagawa, a prominent figure in
              ecological research. His expertise guides our interdisciplinary
              approach. Under his leadership, we strive for excellence in
              scientific inquiry.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              What research methods used?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We employ a variety of methodologies, including field studies,
              laboratory experiments, and computational modeling. This diverse
              toolkit allows us to tackle complex research questions. Our
              methods are designed to yield robust and reproducible results.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              How to get involved?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We welcome collaboration and inquiries from interested parties.
              You can reach out through our contact page for potential
              partnerships. Join us in advancing ecological and evolutionary
              research!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Where is the lab?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              I-DEEL is hosted at UNSW, Sydney, Australia. Our location provides
              access to diverse ecosystems for research. We are proud to be part
              of a leading academic institution.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
