import { Container, Row, Col } from "react-bootstrap"
import headerImg from '../assets/headerImg.png'

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
          <span className="tagline">Welcome to my portfolio</span>
          <h1>Hi I'm Margarita!</h1>
          <h3>web developer</h3>
          <p>I'm a React web developer with a passion for crafting clean, efficient, and user-friendly web applications. My expertise lies in building responsive, scalable, and performant front-end experiences using React, Typescript, Redux and RTK query. I'm driven by solving complex problems and creating innovative solutions that meet and exceed client expectations.
          Also a total aerial acrobat and nature enthusiast 🌎✨
          </p>

          </Col>
          <Col xs={12} md={6} xl={5}>
          <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}