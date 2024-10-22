import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { skillsItems } from "../constants/skillsItems";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000},
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id='skills'>
      <Container>
        <Row>
          <Col>
          <div className="skill-bx">
            <h2>Skills</h2>
            <p>My technical skills as a web developer</p>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
              {
                skillsItems.map((skill) => (
                <div className="item" key={skill.title}>
                  <img src={skill.imageSrc} alt={skill.title} />
                  <h5>{skill.title}</h5>
                </div>
                ))
              }
            </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}