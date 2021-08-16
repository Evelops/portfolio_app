import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MainContent() {
    function handleScroll(){
        window.scroll({
            top:document.body.offsetHeight,
            left:0,
            behavior:'smooth',
        });
    }
    return(
        <Container fluid>
            <Row>
                <Col>
                <button type="button" onClick={handleScroll}>start</button>
                </Col>
            </Row>

        </Container>
    );
}
export default MainContent;
