import React, { useState } from 'react';
import BookingHeader from './BookingHeader'
import Carousel from 'react-bootstrap/Carousel'
import uhome1 from '../pictures/uhome1.jpg'
import uhome2 from '../pictures/uhome2.png'
import uhome3 from '../pictures/uhome3.jpg'
import Footer from '../Footer';


function HomeBooking() {

 
  
  return (

    <>
    <BookingHeader/>
    
                         
                         <div className='container-fluid car' >  
                         <Carousel interval={1500} keyboard={false} pauseOnHover={true}>  
                         <Carousel.Item style={{height:"85vh"}}  >  
                         <img style={{height:"85vh"}}  
                         className="d-block w-100"  
                        src={uhome1}  />  
                           <Carousel.Caption>  
                             <h3 className=" pb-5 font-weight-bold" style={{color:"white"}}> Fly with us and enjoy exclusive benefits on your stay</h3>  
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{height:"85vh"}}>  
                                 <img style={{height:"85vh"}}  
                                   className="d-block w-100"  
                                    src={uhome2}    />  
                                       <Carousel.Caption>  
                                   <h3 className=" pb-5 mb-5 font-weight-bold" style={{color:"white"}}> Max security,Max flexibility, Max fun</h3>  
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{height:"85vh"}}>  
                                       <img style={{height:"85vh"}}  
                                        className="d-block w-100"  
                                         src={uhome3}   />  
                                        <Carousel.Caption>  
                                          <h3 className=" pb-5 mb-5 font-weight-bold" style={{color:"black"}}>Get up to 15% off on all bookings and 10% cashback for HDFC credit cards</h3>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>  

                               <Footer/>
</>  

 
  );
}

export default HomeBooking;