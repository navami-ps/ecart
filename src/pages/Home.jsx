import React from 'react'
import { Row,Col,Card,Button } from 'react-bootstrap'
import useFetch from '../Hook/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/slice/wishlistSlice'
import { addtoCart } from '../redux/slice/cartSlice'


function Home() {
  const dispatch = useDispatch()
    const data = useFetch("https://dummyjson.com/products")
    console.log(data);
  return (
    <Row className='ms-5' style={{marginTop:'100px'}}> 
    {
      data?.length>0?data?.map((products,index)=>(
      <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card style={{ width: '16rem',height:'25rem'}} >
      <Card.Img style={{height:'150px'}} variant="top" src={products?.thumbnail} />
      <Card.Body>
        <Card.Title>{products?.title}</Card.Title>
        <Card.Text>
          <p>{products?.description.slice(0,55)}...</p>
          <h5>${products?.price}</h5>
        </Card.Text>
      <div className='d-flex justify-content-between'>
            <Button onClick={()=>dispatch(addToWishlist(products))} className='btn btn-light' ><i class="fa-solid fa-heart text-danger"></i></Button>
            <Button onClick={()=>dispatch(addtoCart(products))} className='btn btn-light' ><i class="fa-solid fa-cart-shopping text-success"></i></Button>
      </div>
      </Card.Body>
    </Card>
        </Col>)):<p className='tex-danger fw-bolder fs-4'>Nothing to display</p>
    }
</Row>
  )
}

export default Home