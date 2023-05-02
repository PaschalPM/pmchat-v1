import { NavbarTitleType } from "./@types"

function NavbarTitle({ children, href, icon }:NavbarTitleType){
    return(
      <a href={ href } className='nav-title'>
        <h2>
          <span className="text"> { children }</span> 
          <span className="icon"> { icon } </span>
        </h2>
      </a>
    )
  }

  export default NavbarTitle