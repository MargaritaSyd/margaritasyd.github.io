import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from "react-bootstrap"
import { educationItems } from "../constants/educationItems";
import { EducationCard } from "./EducationCard";
import storybook from '../assets/storybook.png';


export const Education = () => (
  <section className="general" id="education">
    <Container>
      <Row>
        <Col>
          <h2>Some more...</h2>
          <TabContainer id="education-tabs" defaultActiveKey="first">
            <Nav variant="pills">
              <NavItem>
                <NavLink eventKey="first">Education</NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey="third">My Storybook </NavLink>
              </NavItem>
            </Nav>
            <TabContent style={{margin: '50px 0 50px 0'}}>
              <TabPane eventKey="first">
                <Row>
                  {educationItems.map((educationItem) => (
                    <EducationCard
                      key={educationItem.title}
                      {...educationItem}
                    />
                  ))}
                </Row>
              </TabPane>
              <TabPane eventKey="third">
                <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
                  <img src={storybook} alt='storybok' style={{width: '200px'}}/>
                  <a href="https://margaritasyd.github.io/my-storybook">
                  Check out my components!
                  </a>
                  <a href="https://www.npmjs.com/package/margarita-components">
                  Get my storybook with npm!
                  </a>
                </div>
              </TabPane>
            </TabContent>
          </TabContainer>
        </Col>
      </Row>
    </Container>
  </section>
)