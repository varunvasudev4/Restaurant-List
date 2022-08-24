import React from 'react'
import {useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'
import {useDispatch,useSelector} from 'react-redux'
import { listRestaurant } from '../actions/restaurantAction'


function Home() {

  // const [items,setItem] = useState([])

  // const fetchData = async ()=>{
  //   await fetch('/restaurants.json')
  //   .then((res) => res.json())
  //   .then((data) => setItem(data.restaurants))
  // }

  const dispatch = useDispatch()

  const result = useSelector(state=>state.restaurantReducer)

  const {restaurant} = result

  useEffect(() => {
    dispatch(listRestaurant())
  }, [])
  
  console.log("data is",restaurant);
  return (

    <div>
      <Row>
        {restaurant.map((item)=>(
          <Col sm={12} md={8} lg={6} xl={3} className='p-3'>
            <RestaurantCard data={item}/>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Home