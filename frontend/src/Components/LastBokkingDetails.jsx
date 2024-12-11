import { seats } from "../data";
import "../CSS/LastBooking.css";
import { useContext } from "react";
import Contextuse from "./Context/CreateContext";

const LastBookingDetails = () => {
  const context = useContext(Contextuse);
  const { lastbookingdetails } = context;

  return (
    <div className="maincon">
      <h2 className="header">Last Booking Details</h2>
      {lastbookingdetails ? (
        <>
          <div className="seatcon">
            <p className="seatheader">Seats:</p>
            <ul className="seat">
              {Object.keys(lastbookingdetails.seats || {}).map((seat, index) => (
                <li className="seatval" key={index}>
                  {seat}: {lastbookingdetails.seats[seat]}
                </li>
              ))}
            </ul>
          </div>

          <p className="slot" style={{ textAlign: "left" }}>
            Slot: {lastbookingdetails.slot || "00:00 am"}
          </p>
          <p className="movie">
            Movie: <span>{lastbookingdetails.movie || "Unknown"}</span>
          </p>
        </>
      ) : (
        <p className="no-data">No booking details available</p>
      )}
    </div>
  );
};

export default LastBookingDetails;
