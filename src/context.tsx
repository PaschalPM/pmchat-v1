import { createContext } from "react";
import { useState } from "react";
import { useMediaQuery } from "./custom_hooks";

type AppContextType = {
	isMenuOpen: boolean,
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
	isMobileView: boolean,
}
export const AppContext = createContext({} as AppContextType)

const AppContextProvider = ({children}: React.PropsWithChildren) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const isMobileView = useMediaQuery("max-width:700px")

	return (
		<AppContext.Provider value={{
			isMenuOpen,
			setIsMenuOpen,
			isMobileView
		}}>
			{children}
		</AppContext.Provider>
	)
}

export default AppContextProvider