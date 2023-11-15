import React from 'react'
import { Col, Row,Card,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removefromWishlist } from '../redux/slice/wishlistSlice'
import { addtoCart } from '../redux/slice/cartSlice'

function Wishlist() {
  const handlewishlistCart = (products)=>{
    dispatch(addtoCart(products))
    dispatch(removefromWishlist(products.id))
  }
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  return (
    <div style={{marginTop:'100px'}} className='ms-3'>
      <Row>
         {
        wishlistArray.length>0?
        wishlistArray.map((products,index)=>(
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
            <Button onClick={()=>dispatch(removefromWishlist(products.id))} className='btn btn-light' ><i class="fa-solid fa-trash text-danger"></i></Button>
            <Button onClick={()=>handlewishlistCart(products)} className='btn btn-light' ><i class="fa-solid fa-cart-shopping text-success"></i></Button>
      </div>
      </Card.Body>
    </Card>
        </Col>)):<div className='d-flex align-items-center justify-content-center w-100 flex-column'>
          <img style={{height:'60vh'}} src="https://tse3.mm.bing.net/th?id=OIP.uKmFhcf260brx6rM9o9mngAAAA&pid=Api&P=0&h=180" alt="" />
          <p  className='mb-5 text-danger fw-bolder'>Your Wishlist is Empty</p>
          <Link style={{textDecoration:'none'}} className='btn btn-success rounded mb-5' to={'/'}>Back To Home</Link>
        </div>
}

      </Row>
       </div >
  )
}

export default Wishlist