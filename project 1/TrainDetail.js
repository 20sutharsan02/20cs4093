
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function TrainDetail() {
  const { trainId } = useParams();
  const [train, setTrain] = useState({});

  useEffect(() => {

    fetch(`/api/trains/${trainId}`)
      .then((response) => response.json())
      .then((data) => setTrain(data))
      .catch((error) => console.error('Error fetching train details:', error));
  }, [trainId]);

  return (
    <div>
      <h1>Train Details</h1>
      <h2>{train.name}</h2>
      <p>Departure Time: {train.departureTime}</p>
      <p>Seat Availability: {train.seatAvailability}</p>
      <p>Price (Sleeper): {train.priceSleeper}</p>
      <p>Price (AC): {train.priceAC}</p>
      
    </div>
  );
}

export default TrainDetail;
