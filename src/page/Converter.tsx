import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import NavBar from "../component/NavBar";
import Button from 'react-bootstrap/Button';

function Converter() {
    return (
        <div>
            <div>
                <NavBar/>
            </div>

            <div id="page-title" className="mt-2">
                <h3>Conveter</h3>
            </div>

            <div id="page-main">
                <Container className="mt-1">
                    <Row id="From row">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={5}/>
                            </Form.Group>
                        </Form>
                    </Row>

                    <Row id="button-row">
                        <Col>
                            <Button variant="primary" type="submit" className="ms-2">
                                Submit
                            </Button>
                        </Col>
                    </Row>

                    <Row>
                        <Form>
                            <Form.Group>
                                <Form.Control
                                    className="mt-3"
                                    type="text"
                                    placeholder="Disabled input"
                                    aria-label="Disabled input example"
                                    disabled
                                    readOnly
                                />
                                <Form.Control
                                    className="mt-3"
                                    type="text"
                                    placeholder="Disabled input"
                                    aria-label="Disabled input example"
                                    disabled
                                    readOnly
                                />
                                <Form.Control
                                    className="mt-3"
                                    type="text"
                                    placeholder="Disabled input"
                                    aria-label="Disabled input example"
                                    disabled
                                    readOnly
                                />
                            </Form.Group>

                        </Form>


                    </Row>


                </Container>
            </div>
        </div>
    );
}

export default Converter;