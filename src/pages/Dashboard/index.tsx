import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import UserSection from "../../components/UserSection"
import { useContext } from "react"
import { AppContext } from "../../context"
import { motion as m } from "framer-motion"

const Dashboard = () => {
  const { pathname } = useLocation()
  const isDashboardPath = pathname == '/dashboard'
  const isChatBoxPath = /^\/dashboard\/chat\/[0-9]*/.test(pathname)
  const {isMobileView, userDashOpen} = useContext(AppContext)

  return (
    <div className="dashboard">
        { isChatBoxPath && (isMobileView) ? null : 
          <div className="sideboard">
            {!isMobileView && <UserSection/>}
            <div className="other-users-section">
              Lorem ipsum dolor sit.
            </div>
          </div> 
        }
        <div className="mainboard">
          { isDashboardPath && (isMobileView) ? null : isDashboardPath ? 
          "EMPTY" : <Outlet></Outlet>}
        </div>
        <>{isMobileView && userDashOpen && <m.div><UserSection/></m.div>}</>
    </div>
  )
}

export default Dashboard