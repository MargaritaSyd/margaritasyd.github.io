import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import typescript from '../assets/typescript.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import webpack from '../assets/webpack.png';
import redux from '../assets/redux.png';
import tailwind from '../assets/tailwind.png';
import storybook from '../assets/storybook.png';
import sass from '../assets/sass.png';

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
              <div className="item">
                <img src={javascript} alt="ImageSkill" />
                <h5>Javascript</h5>
              </div>
              <div className="item">
                <img src={typescript} alt="ImageSkill" />
                <h5>TypeScript</h5>
              </div>
              <div className="item">
                <img src={webpack} alt="ImageSkill" />
                <h5>Webpack</h5>
              </div>
              <div className="item">
                <img src={redux} alt="ImageSkill" />
                <h5>Redux</h5>
              </div>
              <div className="item">
                <img src={react} alt="ImageSkill" />
                <h5>React</h5>
              </div>
              <div className="item">
                <img src={redux} alt="ImageSkill" />
                <h5>RTK Query</h5>
              </div>
              <div className="item">
                <img src={storybook} alt="ImageSkill" />
                <h5>Storybook</h5>
              </div>
              <div className="item">
                <img src={sass} alt="ImageSkill" />
                <h5>Sass</h5>
              </div>
              <div className="item">
                <img src={tailwind} alt="ImageSkill" />
                <h5>Tailwind</h5>
              </div>
            </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src="a"/>
    </section>
  )
}