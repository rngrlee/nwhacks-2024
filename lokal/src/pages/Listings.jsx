import Navbar from "../Navbar"

export default function Listings() {
    return (
        <div>
            <h1>Listings</h1>
            <Navbar />
        </div>
    )
}


// import React, { useEffect, useState } from 'react';
// import ListingDB from '../listings.json';

// function Listings() {
//     return (
//         <div>
//             <h1>Listings</h1>
//             {
//                 ListingDB.map( listing => {
//                     return(
//                         <div className="box">
//                             <h4>{ listing.sender }</h4>
//                             <p>{ listing.content }</p>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     );
// }

// export default Listings;