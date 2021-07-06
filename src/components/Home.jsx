import { Container, Row, Col } from "react-bootstrap";
import MyCarousel from "./MyCarousel";

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col xs={12} md={6}>
          <h1>Welcome To Striverestaurant!</h1>
          <p>We can only cook Pasta!</p>
          <MyCarousel />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
