
export default function vacationCards(props) {
  let priceText;
  if (props.price < 500) {
    priceText = "$";
  } else if (props.price > 500 && props.price < 1000) {
    priceText = "$$";
  } else if (props.price > 1000) {
    priceText = "$$$";
  }

  return (
    <div className="cards">
        
    <div>
      
      <span className="place"> {props.place}</span>
  </div>
  <div>  {priceText && <div className="card-text"> Cost {priceText}</div>}</div>
  <div>
      <span className="gotime">
         Best time to vist - {props.timeToGo}
      </span>
  </div>
    
<img src={props.img} className="vacaPics" alt="vaca-pics"></img>
  
    
    
    
    </div>
  );
}

// Give each card 1, 2, or 3 dollar signs ($) depending on if it's less than $500, less than $1000, or more than $1000

// {
//     place: "Meridian, Idaho",
//     price: 40,
//     timeToGo: "Spring"
//   },{
//     place: "Cancun",
//     price: 900,
//     timeToGo: "Winter"
//   },{
//     place: "China",    price: 1200,
//     timeToGo: "Fall"
//   },{
//     place: "Russia",
//     price: 1100,
//     timeToGo: "Summer"
//   },{
//     place: "Lebanon",
//     price: 400,
//     timeToGo: "Spring"
//   }
// ]
