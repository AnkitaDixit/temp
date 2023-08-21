import React, { useEffect, useState } from 'react';
import { getDetails } from '../../utils/api';
import { Detail } from '../../types';
import './DetailPage.css';
import { BigHotelIcon } from '../../utils/icons';

interface DetailProps {
    placeDetails: any;
}

const API_KEY = 'AIzaSyB6UduF6FxK9AFsNoOtqkNHGPPvBMzEKdI';
const DetailPage: React.FC<DetailProps> = ({ placeDetails }) => {
    return (
        <div className="container" style={{ margin: "10px", padding: "10px", width: "95%", border: "1px solid white", borderRadius: "10px", backgroundColor: "white", height: "77vh" }}>
            {placeDetails && (
                <div>
                    <div className="basicdetails" style={{ backgroundColor: "#eff4ff", padding: "15px", borderRadius: "10px" }}>
                        <h1> <BigHotelIcon /> {placeDetails.name}</h1>
                        <p>{placeDetails.formatted_address}</p>
                    </div>
                    <div className="container" style={{ margin: "10px", padding: "20px", width: "95%", border: "1px solid white", borderRadius: "10px", backgroundColor: "white" }}>
                        <div className="row" style={{ display: "flex" }}>
                            <div className="col" id="Photodiv" style={{ width: "50%", padding: "5px" }}>
                                {placeDetails.photos ? placeDetails.photos.map((photo: any, index: any) => (
                                    <img
                                        key={index}
                                        src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${API_KEY}`}
                                        alt={`Photo ${index + 1}`}
                                        style={{ margin: '10px', maxWidth: '15%' }}
                                    />
                                )) : <></>}
                            </div>
                            <div className="col" id="Detaildev" style={{ border: "2px solid #dadce0", padding: "20px", borderRadius: "20px" }}>
                                <h2><b>{placeDetails.name}</b></h2>
                                <br />
                                <a href={placeDetails.website} target="_blank"><button className="button">Visit Website</button></a>
                                <a href={placeDetails.url} target="_blank"> <button className="button">See Directions</button></a>
                                <p><b>Address:</b> {placeDetails.formatted_address}</p>
                                <p><b>Phone: </b>{placeDetails.formatted_phone_number + " , " + placeDetails.international_phone_number}</p>
                                <div className="google-places-review">
                                    <h2>Google Places Review</h2>
                                    <div className="rating">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <span
                                                key={value}
                                                className={value - Number(placeDetails.rating) <= 0 ? 'star filled' : 'star'}
                                            >★</span>
                                        ))}
                                        {placeDetails.rating ? placeDetails.rating + "/5" : "0/5"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {!placeDetails ? <h1>Loading.....</h1> : <></>}
        </div>
    )
}
export default DetailPage;


