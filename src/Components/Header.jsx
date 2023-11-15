import React from 'react'
import { Nav,Navbar,Container,Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <>
        <Navbar style={{zIndex:'1'}} expand="lg" className="bg-primary position-fixed top-0 w-100">
        <Container>
          <Navbar.Brand ><Link to={'/'} style={{textDecoration:'none',color:'white'}} ><i class="fa-sharp fa-solid fa-bag-shopping"></i>E-Cart</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link><Link to={'/Wishlist'} style={{textDecoration:'none',color:'white'}} className='d-flex align-items-center border rounded p-1' ><i class="fa-solid fa-heart text-danger me-1"></i>Wishlist<Badge className='ms-1' bg="light">{wishlist.length}</Badge></Link></Nav.Link>
              <Nav.Link></Nav.Link>
            </Nav>
              <Nav.Link><Link to={'/Cart'} style={{textDecoration:'none',color:'white'}} className='d-flex align-items-center border rounded p-1' ><i class="fa-solid fa-cart-shopping text-warning me-1"></i>Cart<Badge className='ms-1' bg="light">{cart.length}</Badge></Link></Nav.Link>
              <Nav.Link></Nav.Link> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header