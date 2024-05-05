import { Card, Col, Container, Image, Row } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

const Trending = () => {
  return (
    <div>
      <Container id="trending">
        <br />
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <Row>
          <Col md={4} className="movieImage mt-2">
            <Card className=" bg-dark text-white movieImage">
              <Image src={duneImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-1">
                <Card.Title className="text-center">DUNE</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieImage  mt-2">
            <Card className=" bg-dark text-white movieImage">
              <Image
                src={everythingImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="p-2 m-1">
                <Card.Title className="text-center">EVERYTHING</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieImage  mt-2">
            <Card className=" bg-dark text-white movieImage">
              <Image src={infiniteImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-1">
                <Card.Title className="text-center">INFINITE</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieImage  mt-2">
            <Card className=" bg-dark text-white movieImage">
              <Image src={jokerImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-1">
                <Card.Title className="text-center">JOKER</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieImage  mt-2">
            <Card className=" bg-dark text-white movieImage">
              <Image
                src={lightyearImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="p-2 m-1">
                <Card.Title className="text-center">LIGHTYEAR</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieImage  mt-2 mb-2">
            <Card className=" bg-dark text-white movieImage">
              <Image src={morbiusImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-1">
                <Card.Title className="text-center">MORBIUS</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
