import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from "react-bootstrap"
import { educationItems } from "../constants/educationItems";
import { EducationCard } from "./EducationCard";

export const Education = () => (
  <section className="project" id="education">
    <Container>
      <Row>
        <Col>
          <h1>Education</h1>
          <p>Lorem ipujndnsfdjdfkjfksd</p>
          <TabContainer id="education-tabs" defaultActiveKey="first">
            <Nav variant="pills">
              <NavItem>
                <NavLink eventKey="first">Tab One</NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey="second">Tab Two</NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey="third">Tab Three </NavLink>
              </NavItem>
            </Nav>
            <TabContent>
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
              <TabPane eventKey="second">
                <p>Lorem</p>
              </TabPane>
              <TabPane eventKey="third">
                <p>Lorem</p>
              </TabPane>
            </TabContent>
          </TabContainer>
        </Col>
      </Row>
    </Container>
  </section>
)