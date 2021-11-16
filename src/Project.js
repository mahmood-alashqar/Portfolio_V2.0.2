import { Card, Button, Badge, Nav } from 'react-bootstrap';
//antd components
import { Row, Col } from 'antd';

const Project = (props) => {


  return(
    <Row className='projectsRow'>
          {!props.isRight && 
          <Col span={12} className='colProject' >
          </Col>
          }
          <Col span={12} className={props.colClassName} data-aos={props.fadeDirection} >
            <Card className={props.cardClassName}>
              <Card.Body>
                <Row>
                  <Col span={12} >
                    <div className="details">
                    <h6 className="text-primary text-uppercase">
                      {props.title}
                          </h6>
                    <p className="description mt-3">
                      {props.description}
                          </p>
                          </div>
                    <div className="badges">
                    <Card.Text className='badgesContainer'>             
                      {props.badges.map(name => <Badge>{name}</Badge>)}
                    </Card.Text>
                    </div>
                    <div className='buttonsContainer'>
                    <Nav.Link href={props.githubLink} >
                        <Button>
                          Learn More
                      </Button>
                      </Nav.Link>
                      <Nav.Link href={props.demoLink} >
                        <Button>
                          Demo
                      </Button>
                      </Nav.Link>
                    </div>
                  </Col>
                  <Col span={12}>
                    <Card.Img src={props.siteImage} alt='' />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          {props.isRight && 
          <Col span={12} className='colProject' >
          </Col>
          }
   </Row>
  ) ;
}


export default Project ;