import React, { useState } from "react";
import {Form, Container, Button, Alert} from "react-bootstrap";
import DateTime from "../../DateTime/DateTime";
import { addDoc, collection} from 'firebase/firestore';
import { db } from '../../firebase';

const Reservation = () => {
    
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState(true);
    const formData = { 
        date_choose: '',
        time_choose: '',
        mail_choose: '',
        name_choose: '',
        people_choose: '',
        tel_choose: ''
    }

    const addReservation = async () =>{
        if(form.date === '' || form.time === '' || form.mail === '' ||
            form.people === '' || form.tel === ''){

            await addDoc(collection(db, 'reservation'), form)
            setForm({});
            setErrors(false);
        }else{
            setErrors(true);
        }

    }

    const handleDateChange = (ev) => {
        formData[ev.name] = ev.value
        localStorage.setItem('CocktailAve' + ev.name, ev.value)
       
        if(!(localStorage.getItem('CocktailAvedate_choose')===null) && !(localStorage.getItem('CocktailAvetime_choose')===null) &&
             !(localStorage.getItem('CocktailAvemail_choose')===null) && !(localStorage.getItem('CocktailAvename_choose')===null) &&
             !(localStorage.getItem('CocktailAvepeople_choose')===null) && !(localStorage.getItem('CocktailAvetel_choose')===null)){
            setForm({
                date: localStorage.getItem('CocktailAvedate_choose'),
                time: localStorage.getItem('CocktailAvetime_choose'),
                mail: localStorage.getItem('CocktailAvemail_choose'),
                name: localStorage.getItem('CocktailAvename_choose'),
                people: localStorage.getItem('CocktailAvepeople_choose'),
                tel: localStorage.getItem('CocktailAvetel_choose')
            });
        }

    }

    return(
        <>
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
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text_choose" placeholder="Nombre" onChange={(e) => handleDateChange(e.target)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email_choose" placeholder="Correo" onChange={(e) => handleDateChange(e.target)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text_choose" placeholder="Teléfono" onChange={(e) => handleDateChange(e.target)} />
                            <Form.Text className="text-muted">
                            Tu información será confidencial y no será compartida con nadie.
                            </Form.Text>
                        </Form.Group>
                        {/* {errors && 
                            <Alert variant="warning">
                            Hay un error en tus datos, por favor revisalos antes de reservar.
                            </Alert>    
                        } */}
                        <Button variant="primary" type="submit" onClick={() => addReservation()}>
                            Reservar
                        </Button>
                    </Form>                    
                </Container>
            </div> 
        </>

    )
}

export default Reservation;