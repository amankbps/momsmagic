const Title=()=>{

 
    return(
      <a href="/">
       <img
      className="logo" 
      alt="logo" src="https://scontent.fblr20-1.fna.fbcdn.net/v/t1.6435-9/48367705_261488727856767_4401458875505573888_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=be3454&_nc_ohc=-QrDmU56UV0AX8cz-91&_nc_ht=scontent.fblr20-1.fna&oh=00_AfAz2Uokmr5E2TeXWRVpz2-SCkLQTNsDdRGQgDq1W3L4wA&oe=655F045F"
      />
      </a>);
    
  };

  const Header=()=>
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

  export default Header;