import React, { useContext } from "react"
import { motion as m, AnimatePresence} from "framer-motion"
import { AppContext } from "../../context"

const dropdownMotion = {
  key: "dropdown",
  initial: {
    y:"-120vh"
  },
  animate: {
    y:0
  },
  exit: {
    y:"20px"
  }
}
const Dropdown = ({ children }:React.PropsWithChildren) => {
  const {isMenuOpen} = useContext(AppContext)
  return (
    <AnimatePresence>
      {isMenuOpen && <m.div {...dropdownMotion} className="dropdown">
        { children }
      </m.div>}
    </AnimatePresence>
  )
}

export default Dropdown