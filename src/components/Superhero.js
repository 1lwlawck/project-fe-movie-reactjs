import { Card, Col, Container, Image, Row } from "react-bootstrap";
import antmanImage from "../assets/images/superhero/antman.jpg";
import avengerImage from "../assets/images/superhero/avenger.jpg";
import batmanImage from "../assets/images/superhero/batman.jpg";
import robinhoodImage from "../assets/images/superhero/robinhood.jpg";
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImage from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
  return (
    <div>
      <Container id="superhero">
        <br />
        <br />
        <h1 className="text-white">SUPERHERO MOVIES</h1>
        <Row>
          <Col md={4} className="movieImage mt-2">
            <Card className=" bg-dark text-white movieImage">
              <Image src={antmanImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-1">
                <Card.Title className="text-center">ANT-MAN</Card.Title>
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
              <Image src={avengerImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-1">
                <Card.Title className="text-center">
                  AVENGERS ENDGAME
                </Card.Title>
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
              <Image src={batmanImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-1">
                <Card.Title className="text-center">
                  BATMAN THE DARK KNIGHT
                </Card.Title>
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
                src={robinhoodImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="p-2 m-1">
                <Card.Title className="text-center">ROBINHOOD</Card.Title>
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
                src={spidermanImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="p-2 m-1">
                <Card.Title className="text-center">SPIDER-MAN</Card.Title>
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
              <Image src={supermanImage} alt="Dune Movies" className="images" />
              <div className="p-2 m-1">
                <Card.Title className="text-center">MAN OF STEEL</Card.Title>
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

export default Superhero;
