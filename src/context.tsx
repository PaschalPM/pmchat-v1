import { createContext } from "react";
import { useState } from "react";

type AppContextType = {
	isMenuOpen: boolean,
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const AppContext = createContext({} as AppContextType)

const AppContextProvider = ({children}: React.PropsWithChildren) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	
	return (
		<AppContext.Provider value={{
			isMenuOpen,
			setIsMenuOpen
		}}>
			{children}
		</AppContext.Provider>
	)
}

export default AppContextProvider