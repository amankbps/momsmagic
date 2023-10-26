
import {IMG_CDN_URL} from "/src/config";

const ResturantCard=({resturant})=>
{
   
    return (
      <div className="cards">
       <img src={IMG_CDN_URL+
       resturant.imageId}/>
       <h2>{resturant.action.text}</h2>
       <h3>{resturant.accessibility.altText}</h3>
      

      </div>

    );

};

export default ResturantCard;