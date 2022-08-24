import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function RestaurantCard({data}) {
    //console.log(data);
    return (
        <>
        
            <Link to={`/details/${data.id}`} className='text-decoration-none'>
                <Card>
                    <Card.Img src={data.photograph} variant="top" />
                    <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>
                            Cuisine :{data.cuisine_type} <br></br>
                            Location :{data.neighborhood}
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default RestaurantCard