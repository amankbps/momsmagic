

import {card} from "/src/config";
import ResturantCard from "/components/ResturantCard";
import {useState}  from "react";


 function filterdata(searchTxt,resturants) {

    return resturants.filter((res)=>res.action.text.includes(searchTxt));
 }
  
  const Body=()=>{
      //react vailble
      const[resturants,setResturants]=useState(card);
      const [searchTxt,setsearchTxt]=useState("");

     return(
        <>
      
        <div className="search-container">

            <input type="text" className="search-input" placeholder="Search" value={searchTxt}
            onChange={(e)=>
              { 
                 setsearchTxt(e.target.value);
            
            }
            }
            />
            
            <button className="search-btn"
              onClick={()=>{
                const data=filterdata(searchTxt,resturants);
                setResturants(data);
              }}
            
            >Search</button>
        </div>
      <div className="resturantlist">
       {
         resturants.map((res) => (
          <ResturantCard  resturant={res} />
        ))
       }
      </div>
      </>
     );
  
  };

  export default Body;