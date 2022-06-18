import React, { useState } from "react";
import {Form, Container, Button, Alert} from "react-bootstrap";
import DateTime from "../../DateTime/DateTime";

const Reservation = () => {
    

    return(
        <div>
            <Container className="mb-4">
                <h3>Bienvenido a Nuestra sección de Reservación.</h3>
                <p>En nuestra sucursal tenemos un horaio de:</p>
                <div>
                    <p>Lunes a Viernes de 5 P.M. a 12 P.M.</p>
                    <p>Sabado y Domingo de 5 P.M. a 2 A.M.</p>
                </div>
                <DateTime />
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="Correo" />
                        <Form.Text className="text-muted">
                        Tu información será confidencial y no será compartida con nadie.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Telefono</Form.Label> */}
                        <Form.Control type="text" placeholder="Teléfono" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Reservar
                    </Button>
                </Form>                    
            </Container>
        </div>
    )
}

export default Reservation;