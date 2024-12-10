import SelectMovie from "../Components/SelectMovie"
import LastBokkingDetails from "../Components/LastBokkingDetails"
import TimeSchedule from "../Components/TimeSchedule"
import SelectSeats from "../Components/SelectSeats"
import "../CSS/Home.css"

const Home = () => {
  return (
    <>

    <div className="puradabba">
    <div className="firstsection">
    <div className="Selectmovcontainer">
    <SelectMovie/>
    </div>
    <div className="rightfirst">
    <LastBokkingDetails/>
    </div>
    </div>

    <div className="nicheka">
      <SelectSeats/>
      <TimeSchedule/>
      

      <button className="btn">
        Book Now
      </button>

      
    </div>
    

    

    
    </div>
    </>
  )
}

export default Home
