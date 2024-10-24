import { Col } from "react-bootstrap"

export const EducationCard = ({title, description, imgUrl, period}) => {
  return (
    <Col sm={6} md={3}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} style={{width: '350px'}}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <span>{description}</span>
            <span>{period}</span>
          </div>
        </div>
      </div>
    </Col>
  )
}