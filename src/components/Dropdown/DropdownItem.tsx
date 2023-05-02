import { DropdownItemType } from "./@types"

const DropdownItem = ({icon, text, href}:DropdownItemType) => {
  return (
	<div className="dropdown-item">
		<a href={href}>
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