import React from "react";
import { Container, Row } from "react-bootstrap";
import './Footer.css'

const Footer = () => {
    return(
        <div className="main-footer">
            <Container>
                <Row>
                    {/* Column1 */}
                    <div className="col-md-3 col-sm6">
                        <h4>Lorem</h4>
                        <ul className="list-unstyled">
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col-md-3 col-sm6">
                        <h4>Lorem</h4>
                        <ul className="list-unstyled">
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col-md-3 col-sm6">
                        <h4>Lorem</h4>
                        <ul className="list-unstyled">
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                            <li>lorem ipsum</li>
                        </ul>
                    </div>
                </Row>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear} Restaurant App - México. Todos los derechos reservados.
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default Footer;