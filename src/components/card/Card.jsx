import "./Card.css";

import { NavLink } from "react-router-dom";
import axios from "axios";

const Card = ({ planet }) => {
  

  return (
    <>
      {planet?.results?.map((item, index) => (
        <NavLink
          to={`/`}
          key={index}
        >
          <div className="card-container">
            <div className="details">
              <div className="name">{item?.name}</div>

              <div className="dets">
                <div className="population">
                  <span>population:</span> {item?.population}
                </div>
                <div className="rotation">
                  <span>rotation period:</span> {item?.rotation_period} days
                </div>
                <div className="orbital">
                  <span>orbital period:</span> {item.orbital_period} days
                </div>
                <div className="diameter">
                  <span>diameter:</span> {item.diameter}
                </div>
                <div className="gravity">
                  <span>gravity:</span> {item.gravity}
                </div>
                <div className="terrain">
                  <span>terrain:</span> {item.terrain}
                </div>
                <div className="surface">
                  <span>surface Water:</span> {item?.surface_water}%
                </div>
                <div className="climate">
                  <span>climate:</span> {item?.climate}{" "}
                </div>
              </div>
              {/* <div className="modal" onClick={setIsopen((prev) => !prev)}> */}
                
            </div>
          </div>
        </NavLink>
      ))}
    </>
  );
};

export default Card;
