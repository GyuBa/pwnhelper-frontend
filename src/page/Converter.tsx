import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import NavBar from "../component/NavBar";
import Button from 'react-bootstrap/Button';

function Converter() {
    return (
        <div>
            <NavBar/>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={10}/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={10}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="float-md-end">
                    <Col>
                        <Button variant="primary" type="submit" className="ms-2">
                            Submit
                        </Button>
                        <Button variant="primary" type="submit" className="ms-2">
                            Submit
                        </Button>
                        <Button variant="primary" type="submit" className="ms-2">
                            Submit
                        </Button>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Converter;