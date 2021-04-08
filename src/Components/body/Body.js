import React from 'react';
import Header from '../Header';

import wallpaper from './background.png'

function Body()
{
   
    return (
            <>
            <Header/>
       
        <div  id="bimg" className="container-fluid "  style={{
            backgroundImage: `url(${wallpaper})`,
            backgroundSize: "cover",
            height:"100vh"}} >
                <div className="col">
                   
                    <div>
                       
            <p className="text-center p-5  font-weight-bold text-white ">Save money on airfare by searching for cheap flight tickets on Fly Away.
       Fly Away searches for flight deals on hundreds of airline ticket sites to help you find the cheapest flights.
       Whether you are looking for a last-minute flight or a cheap plane ticket for a later date, you can find the best deals faster at  Fly Away .
       </p>
       </div> 
       
       </div>    
        </div>
    
 </>
    )
}

export default Body;