import { useContext } from "react"
import { DropdownItemType } from "./@types"
import { AppContext } from "../../context"

const DropdownItem = ({icon, text, href, handleClick}:DropdownItemType) => {
	const {setIsMenuOpen} = useContext(AppContext)
	return (
	<div className="dropdown-item">
		<a href={href} 
			onClick={() => {
				(handleClick as ()=>void)()
				setIsMenuOpen(false)
			}}
		>
			{icon}
			<span style={{
				marginLeft:'10px',
				verticalAlign:"bottom"
			}}>
				{ text }
			</span>
		</a>
	</div>
  )
}

export default DropdownItem