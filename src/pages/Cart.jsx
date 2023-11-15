import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removefromCart,emptyCart } from '../redux/slice/cartSlice'
import { useNavigate } from 'react-router-dom'


function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()
  const [total,settotal] = useState(0)
  const navigate = useNavigate()
  const getCartTotal = ()=>{
    if(cartArray.length>0){
      settotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      settotal(0)
    }
  }
  const handlecCart= ()=>{
    dispatch(emptyCart())
    alert("order successfully placed...Thank You for purchasing with us!!")
    navigate('/')
  }
  useEffect(()=>{getCartTotal()},[cartArray])
  return (
    <>
      <div className='container' style={{marginTop:'100px'}}>
        {
          cartArray.length>0?
          <div className='row mt-5'>
            <div className='col lg-7'>
              <table className='table shadow border'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartArray.map((products,index)=>(
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{products.title}</td>
                        <td><img height={'100px'} width={'100px'} src={products.thumbnail} alt="" /></td>
                        <td>${products.price}</td>
                        <td><button onClick={()=>dispatch(removefromCart(products.id))} className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
  
                      </tr>
                    ))
                  }
                </tbody>
              </table>  
            </div>
          <div className='col lg-1'></div>
            <div className='col lg-4'>
              <div className='border p-3 rounded shadow'>
                <h1 className='text-primary'>Cart Summary</h1>
                <h4 className='mt-3'>Total Products:<span>{cartArray.length}</span></h4>
                <h4>Total:<span className='text-danger fw-bolder fs-2'>$ {total}</span></h4>
                <div className='d-grid'>
                  <button onClick={handlecCart} className='btn btn-success mt-3 rounded'>Check Out</button>
                </div>
              </div>
              </div>

          
          </div>
          :<div className='d-flex align-items-center justify-content-center w-100 flex-column'>
          <img style={{height:'60vh'}} src="https://tse3.mm.bing.net/th?id=OIP.uKmFhcf260brx6rM9o9mngAAAA&pid=Api&P=0&h=180" alt="" />
          <p  className='mb-5 text-danger fw-bolder'>Your Cart is Empty</p>
          <Link style={{textDecoration:'none'}} className='btn btn-success rounded mb-5' to={'/'}>Back To Home</Link>
        </div>
  
        }
      
      </div>
    </>
  )
}

export default Cart