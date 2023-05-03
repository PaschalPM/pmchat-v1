import { createContext } from "react";
import { useState } from "react";
import { useMediaQuery } from "./custom_hooks";

type AppContextType = {
	isMenuOpen: boolean,
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
	isMobileView: boolean,
	userDashOpen: boolean,
	setUserDashOpen: React.Dispatch<React.SetStateAction<boolean>>,
	user: {name:string},
	setUser: React.Dispatch<React.SetStateAction<{name:string}>>
}
export const AppContext = createContext({} as AppContextType)

const AppContextProvider = ({children}: React.PropsWithChildren) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const isMobileView = useMediaQuery("max-width:700px")
	const [userDashOpen, setUserDashOpen] = useState(false)
	const [user, setUser] = useState({name:"Paschal"})

	return (
		<AppContext.Provider value={{
			isMenuOpen,
			setIsMenuOpen,
			isMobileView,
			userDashOpen,
			setUserDashOpen,
			user, setUser
		}}>
			{children}
		</AppContext.Provider>
	)
}

export default AppContextProvider