import { movielist } from "../data"
import Displayelement from "./Displayelement"

const MovieMap = () => {
  return (
    <div>
      {movielist.map((txt,ele)=>{
        return(
        <Displayelement text={txt} key={ele}/>
        )
      })}
    </div>
  )
}

export default MovieMap
