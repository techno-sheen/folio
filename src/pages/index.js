import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/home/Hero";
import Works from "../sections/home/Works";
import Contact from "../sections/common/Contact";

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Element name="works">
          <Works />
        </Element>

        <Contact />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
