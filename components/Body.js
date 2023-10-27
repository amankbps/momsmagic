

import {restaurants} from "/src/config";
import ResturantCard from "/components/ResturantCard";
import {useState,useEffect}  from "react";


 function filterdata(searchTxt,resturants) {

    return resturants.filter((res)=>res.info.name.includes(searchTxt));
 }
  
  const Body=()=>{
      //react vailble
      const[resturants,setResturants]=useState([]);
      const [searchTxt,setsearchTxt]=useState("");

      useEffect(()=>{
        //API call
        getResturant();
      },[]);

      async function getResturant() {
         const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.996673596866396&lng=77.72052761167288&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
         const json=await data.json();
         
         console.log(json);

        setResturants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         
        
      }

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