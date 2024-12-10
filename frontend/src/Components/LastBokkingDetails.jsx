import { seats } from "../data";
import "../CSS/LastBooking.css"
const LastBookingDetails = () => {
  return (
    <div className="maincon">
      <h2 className="header">Last Booking Details</h2>

      <div className="seatcon">
        <p className="seatheader">
          <ul className="seat">
            {seats.map((seat, index) => (
              <li className="seatval" key={index}>
                {seat}: 0
              </li>
            ))}
          </ul>
        </p>
      </div>

      <p className="slot" style={{textAlign:"left"}}> Slot :00:00am<span>

      </span> 

      </p>
      <p className="movie">Movie:<span>Vedha</span>

      </p>
    </div>
  );
};

export default LastBookingDetails;
