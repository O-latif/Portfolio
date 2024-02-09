import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useMediaQuery } from "@mui/material";
import '../Css/Slider.css';


const Slider = () => {
  const is60 = useMediaQuery("(min-width:1000px)");
  const is75 = useMediaQuery("(min-width:1750px)");
  const dispatch = useDispatch();
 
  // const token = useSelector((state) => state.token);



  return <>
    <div id="carouselExampleAutoplaying" className= {is60 ? "carousel slide resize" : "carousel slide "} data-bs-ride="carousel">
    {/* <div className= {is75 ? "carousel-indicators bot-100" : is60 ? "carousel-indicators bot-15" : "carousel-indicators"}>
        {array.forEach(element => {
          
        })

        }

      </div> */}

      <div className= {is60 ? "carousel-inner resize" : "carousel-inner" } style={{height : '20%'}}>
          <div className= "active carousel-item"><img src="html.png" className="d-block w-10" alt="html"  /></div>
          <div className= "carousel-item"><img src="css-3.png" className="d-block w-10" alt="css"  /></div>
          <div className= "carousel-item"><img src="javascript.svg" className="d-block w-10" alt="js"  /></div>
          <div className= "carousel-item"><img src="react.png" className="d-block w-10" alt="react"  /></div>
          <div className= "carousel-item"><img src="bootstrap.png" className="d-block w-10" alt="bootstrap"  /></div>
          <div className= "carousel-item"><img src="node-js.png" className="d-block w-10" alt="nodejs"  /></div>
          <div className= "carousel-item"><img src="mongodb.png" className="d-block w-10" alt="mongodb"  /></div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </>
}

export default Slider;