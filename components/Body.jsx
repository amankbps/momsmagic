

import {restaurants} from "/src/config";
import ResturantCard from "/components/ResturantCard";
import {useState,useEffect}  from "react";
import Shimmer from "/components/shimmer";


 function filterdata(searchTxt,resturants) {

    return resturants.filter((res)=>res.info.name.includes(searchTxt));
 }
  
  const Body=()=>{
      //react vailble
      const[filteredresturants,setfilteredresturants]=useState([]);
      const[allresturants,setallresturants]=useState([]);
      const [searchTxt,setsearchTxt]=useState("");

      useEffect(()=>{
        //API call
        getResturant();
      },[]);

      async function getResturant() {
         const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.996673596866396&lng=77.72052761167288&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
         const json=await data.json();
         
         

        setallresturants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredresturants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         
        
      }

     return((filteredresturants.length==0)?<Shimmer/>:
       ( <>
      
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
                const data=filterdata(searchTxt,allresturants);
                setfilteredresturants(data);
              }}
            
            >Search</button>
        </div>
      <div className="resturantlist">
       {
        filteredresturants.map((res) => (
          <ResturantCard  resturant={res} />
        ))
       }
      </div>
      </>)
     );
  
  };

  export default Body;