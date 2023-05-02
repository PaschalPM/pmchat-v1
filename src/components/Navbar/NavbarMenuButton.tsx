import { MdArrowDropDown } from "react-icons/md"
import { AppContext } from "../../context"
import { useContext } from "react"

const NavbarMenuButton = () => {
	const {isMenuOpen, setIsMenuOpen} = useContext(AppContext)
  return (
	<>
		<button 
			className={`navbar-menu-button ${isMenuOpen && "active"}`} 
			onClick={()=>setIsMenuOpen(v=>!v)}
			>
			<span className="navbar-menu-button-icon">
				<MdArrowDropDown color="white" size="35px" />
			</span>
		</button>
	</>
  )
}

export default NavbarMenuButton
