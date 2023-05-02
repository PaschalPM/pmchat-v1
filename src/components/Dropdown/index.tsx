import React, { useContext } from "react"
import { motion as m, AnimatePresence} from "framer-motion"
import { AppContext } from "../../context"

const dropdownMotion = {
  key: "dropdown",
  initial: {
    y:"-120vh",
    opacity: 0
  },
  animate: {
    y:0,
    opacity: 1
  },
  exit: {
    y:"-120vh",
    opacity: 0,
    transition: {
      duration: .5
    }
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