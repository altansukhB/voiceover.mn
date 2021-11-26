import { Row,Col, Container } from "react-bootstrap";

export default () => (
  <div className="Top-nav">
    <Container>
    <Row>
      <Col className="Top-nav-text" xl="6">
      <h1>Мэргэжлийн <h1 style={{ fontSize:"50px", color:"#020e3d"}}> Дуу оруулагчдыг </h1> нэг дороос ...</h1>
      </Col>
      <Col xl="6">
      <img src="pic2.png"></img>
      </Col>
      
    </Row>
  </Container>
  </div>
);
