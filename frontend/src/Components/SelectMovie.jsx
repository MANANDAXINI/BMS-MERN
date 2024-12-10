import { useContext } from "react";
import { movielist } from "../data";  // Assuming movie list is stored here
import Contextuse from "./Context/CreateContext";
import Displayelement from "./Displayelement";  // Assuming Displayelement is a custom component4
import "../CSS/SelectMovie.css"

const SelectMovie = () => {
  const { movie, changemovie } = useContext(Contextuse);  // Using context to get and set movie

  return (
    <div>
      <h1>Select the Movie</h1>
      <div>
        {movielist.map((txt, idx) => (
          <Displayelement
            key={idx}
            text={txt}
            data={movie}
            changeselection={changemovie}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectMovie;
