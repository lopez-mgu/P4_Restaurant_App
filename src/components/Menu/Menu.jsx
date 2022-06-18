import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import { onSnapshot, collection} from 'firebase/firestore';
import { db } from '../../firebase';
import { Col, Container, Row } from 'react-bootstrap';


const Menu = () => {

  const [data, setData] = useState([]);

  const getData = () => {
    const dataArry = []
    onSnapshot(collection(db, 'menu'), (snapshoot) => {
      snapshoot.docs.forEach( (doc) =>{
        dataArry.push({
          ...doc.data(),
          id: doc.id});
        setData(dataArry);
      });
      console.log('dataArry', dataArry);
      console.log('data', data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

    return (
      <>
        <Container>
          <Row className="g-4">
            {
              data.map((info, index) =>{
                return(
                  <Col key={index} className='d-flex justify-content-center'>
                    <Cards data={info}/>
                  </Col>
                );
              })
            }
          </Row>
        </Container>
      </>
      
    )
}

export default Menu;

