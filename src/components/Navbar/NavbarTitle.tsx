import { NavbarTitleType } from "./@types"
import { Link } from "react-router-dom";

function NavbarTitle({ children, href, icon }:NavbarTitleType){
    return(
      <Link to={ href } className='nav-title'>
        <h2>
          <span className="text"> { children }</span> 
          <span className="icon"> { icon } </span>
        </h2>
      </Link>
    )
  }

  export default NavbarTitle