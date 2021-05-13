import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";

import { Section, Box, ListNav, ButtonOutline } from "../../components/Core";
import WorkCard from "../../components/WorkCard";
import { masonryWorks1 } from "../../data";

const Works = () => {
  const [items, setItems] = useState([]);
  const [activeLink, setActiveLink] = useState("*");

  useEffect(() => {
    setItems(masonryWorks1);
  }, []);

  const filterBy = (cat) => {
    if (cat === "*") {
      setActiveLink("*");
      setItems(masonryWorks1);
    } else {
      const filteredItems = masonryWorks1.filter((item) => {
        return item.categories.indexOf(cat) !== -1;
      });
      setActiveLink(cat);
      setItems(filteredItems);
    }
  };

  const masonryOptions = {
    transitionDuration: 1000,
  };

  return (
    <>
      {/* <!-- Works Area --> */}
      <Section className="position-relative">
        <Container>
          <Box mb="2.5rem" ml="-1.75rem">
            <ListNav className="nav">
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "*" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("*");
                  }}
                >
                  All work
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "development" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("development");
                  }}
                >
                  AEM Development
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "design" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("design");
                  }}
                >
                  Design
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "wordpress" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("wordpress");
                  }}
                >
                  Wordpress
                </a>
              </li>
            </ListNav>
          </Box>
        </Container>

        <Container fluid>
          <Masonry
            options={masonryOptions}
            className={"masonry-grid row"} // default ''
          >
            {items.map((item, index) => (
              <Col lg="4" md="6" sm="12" key={index} className="filtr-item">
                <WorkCard workItem={item} mb="30px" link={item.link} />
              </Col>
            ))}
          </Masonry>
          <Box pt="3rem" className="text-center">
            <ButtonOutline>Load more</ButtonOutline>
          </Box>
        </Container>
      </Section>
    </>
  );
};

export default Works;
