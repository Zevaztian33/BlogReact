import React, { useState } from "react";
import minilogo from './../minilogo.svg';
import './styles.css';
import { Navbar, Container, Nav, Jumbotron, Card, Button, ListGroup, Row, Col, CardGroup, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

function BlogPosts(){
    $(document).ready(function(){
        $('.card').slice(0,6).show();
        $('.btnLook').on('click', function(event){
            event.preventDefault();
            $(".card:hidden").slice(0, 3).slideDown();
        })
    });
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 100){
        setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 100){
        setShowScroll(false)
        }
    };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop);

    return(
        <section>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        alt="logo"
                        src={minilogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top mr-1"
                    />
                    <b>Mi Blog</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="#footer">Acerca de</Nav.Link>
                        <Nav.Link href="#footer">Contacto</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Row>
                            <Col xs={8}>
                        <FormControl type="text" placeholder="Buscar artículo" className="mr-sm-2" />
                        </Col>
                        <Col xs={4}>
                        <Button variant="outline-light">Buscar</Button>
                        </Col>
                        </Row>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Jumbotron fluid className="py-2 mb-0">
                <Container className="text-center">
                    <h1><b>Últimas entradas del Blog</b></h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In diam nibh, consectetur vitae ultricies ac, porttitor quis mi. Nam vitae mi ligula. Praesent aliquam lobortis odio non bibendum.
                    </p>
                </Container>
            </Jumbotron>
            <section className="body-Blog bg-dark">
                <Container fluid>
                    <Row>
                        <Col xs={12} md={3}>
                            <article className="blog-List py-2">
                                <h3 className="text-white">Lista completa de entradas...</h3>
                            <ListGroup>
                                <ListGroup.Item action variant="secondary">Cras justo odio</ListGroup.Item>
                                <ListGroup.Item action variant="secondary">Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item action variant="secondary">Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item action variant="secondary">Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item action variant="secondary">Vestibulum at eros</ListGroup.Item>
                                <ListGroup.Item action variant="secondary">Cras justo odio</ListGroup.Item>
                                <ListGroup.Item action variant="secondary">Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item action variant="secondary">Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item action variant="secondary">Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>
                            </article>
                        </Col>
                        <Col xs={12} md={9} className="">
                            <article className="body-Post py-2">
                                <CardGroup>
                                    <Card className="p-1 m-1">
                                        <Card.Img variant="top" src="https://via.placeholder.com/350x250" />
                                        <Card.Body className="p-1">
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                        </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="p-1">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                        </Card.Footer>
                                    </Card>
                                    <Card className="p-1 m-1">
                                        <Card.Img variant="top" src="https://via.placeholder.com/350x250" />
                                        <Card.Body className="p-1">
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This card has supporting text below as a natural lead-in to additional
                                            content.{' '}
                                        </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="p-1">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                        </Card.Footer>
                                    </Card>
                                    <Card className="p-1 m-1">
                                        <Card.Img variant="top" src="https://via.placeholder.com/350x250" />
                                        <Card.Body className="p-1">
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This card has even longer content than the first to
                                            show that equal height action.
                                        </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="p-1">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                                <CardGroup>
                                    <Card className="p-1 m-1">
                                        <Card.Img variant="top" src="https://via.placeholder.com/350x250" />
                                        <Card.Body className="p-1">
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                        </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="p-1">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                        </Card.Footer>
                                    </Card>
                                    <Card className="p-1 m-1">
                                        <Card.Img variant="top" src="https://via.placeholder.com/350x250" />
                                        <Card.Body className="p-1">
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This card has supporting text below as a natural lead-in to additional
                                            content.{' '}
                                        </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="p-1">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                        </Card.Footer>
                                    </Card>
                                    <Card className="p-1 m-1">
                                        <Card.Img variant="top" src="https://via.placeholder.com/350x250" />
                                        <Card.Body className="p-1">
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This card has even longer content than the first to
                                            show that equal height action.
                                        </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="p-1">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                                <CardGroup>
                                    <Card className="p-1 m-1">
                                        <Card.Img variant="top" src="https://via.placeholder.com/350x250" />
                                        <Card.Body className="p-1">
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                        </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="p-1">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                        </Card.Footer>
                                    </Card>
                                    <Card className="p-1 m-1">
                                        <Card.Img variant="top" src="https://via.placeholder.com/350x250" />
                                        <Card.Body className="p-1">
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This card has supporting text below as a natural lead-in to additional
                                            content.{' '}
                                        </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="p-1">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                        </Card.Footer>
                                    </Card>
                                    <Card className="p-1 m-1">
                                        <Card.Img variant="top" src="https://via.placeholder.com/350x250" />
                                        <Card.Body className="p-1">
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This card has even longer content than the first to
                                            show that equal height action.
                                        </Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="p-1">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                        </Card.Footer>
                                    </Card>
                                </CardGroup>
                                <div className="text-center my-1"> 
                                    <Button className="btnLook px-5" variant="outline-light"><b>Ver más</b></Button>
                                </div>
                            </article>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Jumbotron id="footer" fluid className="py-2 mb-0">
                <Container className="text-center">
                    <Row>
                        <Col>
                        <ListGroup>
                        <h4><b>Acerda de</b></h4>
                            <ListGroup.Item action variant="secondary">Cras justo odio</ListGroup.Item>
                            <ListGroup.Item action variant="secondary">Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item action variant="secondary">Morbi leo risus</ListGroup.Item>
                        </ListGroup>
                        </Col>
                        <Col>
                        <ListGroup>
                        <h4><b>Contacto</b></h4>
                            <ListGroup.Item action variant="secondary">Cras justo odio</ListGroup.Item>
                            <ListGroup.Item action variant="secondary">Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item action variant="secondary">Morbi leo risus</ListGroup.Item>
                        </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Button onClick={scrollTop} className="btnTop" variant="secondary" style={{display: showScroll ? 'flex' : 'none'}}><b>^</b></Button>
        </section>
    )
}
export default BlogPosts;