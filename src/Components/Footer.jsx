import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'200px'}} className='d-flex flex-column justify-content-center align-items-center bg-primary text-white'>
        <div className='footer-div d-flex justify-content-evenly w-100 flex-wrap' >
            <div className='website' style={{width:'400px'}}>
           <h4>
           <i class="fa-sharp fa-solid fa-bag-shopping"></i>
                     E-Cart
           </h4>
           <h6>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
           <h6>Code licensed MIT, docs CC BY 3.0.</h6>
           <p>Currently v5.3.2.</p>
            </div>
                <div className='links d-flex flex-column'>
                    <h4>Links</h4>
                    <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
                    Home</Link>
                    <Link to={'/Cart'} style={{textDecoration:'none',color:'white'}}>
                    Cart</Link>
                    <Link to={'/Wishlist'} style={{textDecoration:'none',color:'white'}}>
                    Wishlist</Link>
                </div>
                <div className="guides d-flex flex-column">
                <h4>Links</h4>
                    <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}>
                    React</Link>
                    <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}>
                    React-bootstrap</Link>
                    <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}>
                    Router</Link>
                </div>
                <div className="contacts">
                    <h4>Contact us</h4>
                    <div className="sub d-flex mt-2" >
                        <input type="text" className='form-control' placeholder='enter your Email Id'/>
                        <button className='btn btn-primary ms-2'><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className='icons fs-4 d-flex justify-content-evenly mt-3 '>
                        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-twitter"></i></Link>
                        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i className="fa-brands fa-facebook"></i></Link>
                        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i className="fa-solid fa-envelope-circle-check"></i></Link>
                        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram"></i></Link>
                    </div>
                </div>
            
        </div>
        <p>Copyright © 2023 E-Cart. Built with Docusaurus.</p>
    </div>
  )
}

export default Footer