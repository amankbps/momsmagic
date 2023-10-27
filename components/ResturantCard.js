
import {IMG_CDN_URL} from "/src/config";

const ResturantCard=({resturant})=>
{
   
    return (
      <div className="cards">
       <img src={IMG_CDN_URL+
       resturant.info.cloudinaryImageId
      }/>
       <h2>{resturant.info.name}</h2>
       <h3>{resturant.info.cuisines.slice(0, 3).join(',')}</h3>
       <h3>{resturant.info.locality+","+resturant.info.areaName}</h3>
       <h4>{"Distance "+resturant.info.sla.lastMileTravelString}</h4>
       <h4>{"Estimated Time "+resturant.info.sla.deliveryTime+" min"}</h4>
       <h5>{"Rating: "+resturant.info.avgRating}</h5>
      </div>

    );

};

export default ResturantCard;