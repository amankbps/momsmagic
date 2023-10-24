
import React from "react";
import ReactDOM from "react-dom/client";


const Title=()=>{

 
  return(
    <a href="/">
     <img
    className="logo" 
    alt="logo" src="https://scontent.fblr20-1.fna.fbcdn.net/v/t1.6435-9/48367705_261488727856767_4401458875505573888_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=be3454&_nc_ohc=-QrDmU56UV0AX8cz-91&_nc_ht=scontent.fblr20-1.fna&oh=00_AfAz2Uokmr5E2TeXWRVpz2-SCkLQTNsDdRGQgDq1W3L4wA&oe=655F045F"
    />
    </a>);
  
};
const card=[
  {
    "id": "749769",
    "imageId": "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
    "action": {
      "link": "https://www.swiggy.com/collections/80462?collection_id=80462&tags=layout_CCS_Momos&type=rcv2",
      "text": "Momos",
      "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
      "altText": "restaurant curated for momos",
      "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80462&tags=layout_CCS_Momos",
    "frequencyCapping": {
      
    }
  },
  {
    "id": "750605",
    "imageId": "rng/md/carousel/production/cbb85a3c1684891105294d11f8359996",
    "action": {
      "link": "https://www.swiggy.com/collections/80494?collection_id=80494&tags=layout_CCS_Tea&type=rcv2",
      "text": "Tea",
      "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
      "altText": "restaurants curated for tea",
      "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80494&tags=layout_CCS_Tea",
    "frequencyCapping": {
      
    }
  },
  {
    "id": "749774",
    "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
    "action": {
      "link": "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
      "text": "Noodles",
      "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
      "altText": "restaurant curated for noodles",
      "altTextCta": "open"
    },
    "entityId": "80464",
    "frequencyCapping": {
      
    }
  },
  {
    "id": "750207",
    "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
    "action": {
      "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
      "text": "Pasta",
      "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
      "altText": "restaurant curated for pasta",
      "altTextCta": "open"
    },
    "entityId": "80480",
    "frequencyCapping": {
      
    }
  },
  {
    "id": "750217",
    "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
    "action": {
      "link": "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
      "text": "Pav Bhaji",
      "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
      "altText": "restaurant curated for pav bhaji",
      "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
    "frequencyCapping": {
      
    }
  },
  {
    "id": "750584",
    "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
    "action": {
      "link": "https://www.swiggy.com/collections/83646?collection_id=83646&tags=layout_CCS_SouthIndian&type=rcv2",
      "text": "South Indian",
      "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
      "altText": "restaurants curated for south indian",
      "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian",
    "frequencyCapping": {
      
    }
  },
  {
    "id": "750249",
    "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
    "action": {
      "link": "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
      "text": "Shawarma",
      "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
      "altText": "restaurant curated for shawarma",
      "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
    "frequencyCapping": {
      
    }
  },
  {
    "id": "749791",
    "imageId": "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Pakodas.png",
    "action": {
      "link": "https://www.swiggy.com/collections/80470?collection_id=80470&tags=layout_BAU_Contextual%2Cpakoda&type=rcv2",
      "text": "Pakoda",
      "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
      "altText": "restaurant curated for pakoda",
      "altTextCta": "open"
    },
    "entityId": "80470",
    "frequencyCapping": {
      
    }
  },
  {
    "id": "750132",
    "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
    "action": {
      "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
      "text": "Dosa",
      "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
      "altText": "restaurants curated for dosa",
      "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
    "frequencyCapping": {
      
    }
  },
  {
    "id": "750239",
    "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
    "action": {
      "link": "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
      "text": "Shake",
      "type": "WEBLINK"
    },
    "entityType": "BANNER",
    "accessibility": {
      "altText": "restaurant curated for shakes",
      "altTextCta": "open"
    },
    "entityId": "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
    "frequencyCapping": {
      
    }
  },

];
const ResturantCard=({resturant})=>
{
   
    return (
      <div className="cards">
       <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+
       resturant.imageId}/>
       <h2>{resturant.action.text}</h2>
       <h3>{resturant.accessibility.altText}</h3>
      

      </div>

    );

};

const Body=()=>{

    
   return(
    <div className="resturantlist">
     {
       card.map((res) => (
        <ResturantCard  resturant={res} />
      ))
     }
    </div>
   );

}
const Footer=()=>{

   return(
   <h4>Footer</h4>
   );

}




const AppLayout=()=>
{
    return(

     < >
        <HeaderComponent/>
        <Body/>
        <Footer/>
     </ >

    );

};

const HeaderComponent=()=>
{
    return(<div className="header">
      <Title/>
      <div  className="nav-iteams">
      <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Cart</li>
    </ul>

      </div>

    </div>);

};

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);