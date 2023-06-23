import travel from "./travel.png";
import menu from "./menu.jpeg";

export default function header() {
  return (
    <div className="header">
      <span>
        <img src={travel} className="travel" alt="meh"></img>
        <img src={menu} className="menu" alt="meh"></img>
        <div className="headingdiv">
          <h1 className="heading"> Serenity's Travel Agency </h1> 
        </div>
      </span>
    </div>
  );
}
