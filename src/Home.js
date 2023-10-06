
import React, { useEffect, useState } from 'react';

function Home() {


    const intial=[{
        "trainName": "Chennai Exp",
    "trainNumber" : "2344",
    "departureTime":{ 
    "Hours": 21,
    "Minute":35,
    "Seconds":0,},
    "seatsAvai1ab1e" :{ 
    "sleeper":3,
    "AC":1},
    "price": {
    "sleeper":2,
    "AC":5},
    "delayedBy": 15},
    {
        "trainName": "Hydrad Exp",
    "trainNumber" : "2341",
    "departureTime":{ 
    "Hours": 23,
    "Minute":55,
    "Seconds":0,},
    "seatsAvai1ab1e" :{ 
    "sleeper":6,
    "AC":7},
    "price": {
    "sleeper":554,
    "AC":1854},
    "delayedBy": 5}
];
  const [trains, setTrains] = useState(intial);

  useEffect(() => {
 
    fetch('/api/trains')
      .then((response) => response.json())
      .then((data) => setTrains(data))
      .catch((error) => console.error('Error fetching trains:', error));
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      <table>
        <thead>
          <tr>
            <th>Train Name</th>
            <th>Departure Time</th>
            <th>Seat Availability</th>
            <th>Price (Sleeper)</th>
            <th>Price (AC)</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train) => (
            <tr key={train.id}>
              <td>{train.name}</td>
              <td>{train.departureTime}</td>
              <td>{train.seatAvailability}</td>
              <td>{train.priceSleeper}</td>
              <td>{train.priceAC}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
