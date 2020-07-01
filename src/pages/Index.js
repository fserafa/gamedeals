import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Spinner, Card, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
import Header from '../components/Header';
import About from '../components/About';


export default function Index() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        (async () => {
            setLoading(true)
            const response = await api.get('/r/gamedeals/new.json?limit=50');
            const { data } = response.data
            console.log(data.children)
            setData(data.children);
            setLoading(false);
        })();
    }, [])

    return (
        <>
            <Container>
                {loading ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                        <Spinner animation="border" role="status">
                            <span className="sr-only"></span>
                        </Spinner>
                    </div>
                ) :
                    <>
                        <Header />

                        {(data.map(deal => (
                            <div key={deal.data.id}>
                                <Card className="mb-4">
                                    {/* <Card.Header as="h5"></Card.Header> */}
                                    <Card.Body>
                                        <Row>
                                            <Col lg="9">
                                                <Card.Title>{deal.data.title}</Card.Title>
                                                <Card.Text>
                                                    <a href={deal.data.url} target="_blank" rel="noopener noreferrer">{deal.data.url}</a>
                                                </Card.Text>
                                            </Col>
                                            <Col lg="3" className="d-flex justify-content-center align-items-center">
                                                <a href={deal.data.url} target="_blank" rel="noopener noreferrer"><Button variante="primary" size="lg" block style={{ borderRadius: 25 }}>Get the deal  <FontAwesomeIcon icon={faArrowRight} /></Button></a>
                                            </Col>
                                        </Row>

                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Posted {moment.unix(deal.data.created).format('lll')} via <a href={`https://reddit.com/${deal.data.permalink}`} target="_blank" rel="noopener noreferrer">reddit</a></small>
                                    </Card.Footer>
                                </Card>

                            </div>
                        ))
                        )}
                    </>
                }
            </Container >
            <About />
        </>
    )
}
