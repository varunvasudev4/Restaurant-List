import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup,Card } from 'react-bootstrap'
import Rating from './Rating'
import {useSelector} from 'react-redux'


function RestaurantDetails() {

   const [items, setItem] = useState([])

  const param = useParams()

  const fetchData = async () => {
    await fetch('/restaurants.json')
      .then((res) => res.json())
      .then((data) => setItem(data.restaurants))
  }

 // const result = useSelector(state=>state.restaurantReducer)

  //const {restaurant} = result

  useEffect(() => {
    fetchData()
  }, [])

  const details = items.find(i => i.id == param.id)


  return (

    <div>
      {/* <h1>{details.name}</h1> */}
      {/* Error handling */}
      {
        details ? (
          <Row className='my-3'>
            <Col md={3}>
              <Image className='img mx-3' src={details.photograph} fluid />
            </Col>
            <Col md={4}>
              <ListGroup>
                <ListGroup.Item>
                  <h1>{details.name}</h1>
                  <p>{details.neighborhood}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>Cuisine : {details.cuisine_type}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p>Address : {details.address}</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={5}>
              <ListGroup>
                <ListGroup.Item>
                  <h4>Operating Hours</h4>
                  <p>Monday : {details.operating_hours.Monday}</p>
                  <p>Tuesday : {details.operating_hours.Tuesday}</p>
                  <p>Wednesday : {details.operating_hours.Wednesday}</p>
                  <p>Thursday : {details.operating_hours.Thursday}</p>
                  <p>Friday : {details.operating_hours.Friday}</p>
                  <p>Saturday : {details.operating_hours.Saturday}</p>
                  <p>Sunday : {details.operating_hours.Sunday}</p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Row>
              {
                details.reviews.map(item=>(
                  <Card className='my-3 mx-3 p-3 rounded card'>
                    <ListGroup>
                      <Rating data={item}/>
                    </ListGroup>
                  </Card>
                ))
              }
              
            </Row>
          </Row>
        ) : 'null'
      }
    </div>
  )
}

export default RestaurantDetails