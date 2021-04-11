import React from 'react';
import Header from './usermodule/Header';
import Carousel from 'react-bootstrap/Carousel'
import backg1 from './pictures/backg1.png'
import mhome1 from './pictures/mhome1.png'
import mhome2 from './pictures/mhome2.jpg'
import mhome3 from './pictures/mhome3.jpg'
import Footer from './Footer';


function Home() {


  

  return (

    <>
    <Header/>
    
      
                         <div className='container-fluid car' >  
                         <Carousel interval={1500} keyboard={false} pauseOnHover={true}>  
                         <Carousel.Item style={{height:"85vh"}}  >  
                         <img style={{height:"85vh"}}  
                         className="d-block w-100"  
                        src={mhome1}  />  
                           <Carousel.Caption>  
                             <h3 className=" pb-5 ">Lowest Prices on all flight tickets always</h3>  
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{height:"85vh"}}>  
                                 <img style={{height:"85vh"}}  
                                   className="d-block w-100"  
                                    src={mhome2}    />  
                                       <Carousel.Caption>  
                                   <h3 className=" pb-5 mb-5">Additional assistance for children and senior citizens</h3>  
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{height:"85vh"}}>  
                                       <img style={{height:"85vh"}}  
                                        className="d-block w-100"  
                                         src={mhome3}   />  
                                        <Carousel.Caption>  
                                          <h3 className=" pb-5 mb-5">Travel to 6+ destinations hassel free with fly away.</h3>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>  

                                <Footer/>
</>  

 
  );
}

export default Home;