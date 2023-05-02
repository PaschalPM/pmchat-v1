import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useMediaQuery } from "../../custom_hooks"
import { useLayoutEffect, useState } from "react"

const Dashboard = () => {
  // const [isMobileView, setIsMobileView] = useState(false)
  const { pathname } = useLocation()
  const isMobileView = useMediaQuery("max-width:600px")
  const isDashboardPath = pathname == '/dashboard'
  const isChatBoxPath = /^\/dashboard\/chat\/[0-9]*/.test(pathname)




  return (
    <div className="dashboard">
        { isChatBoxPath && (isMobileView) ? null : 
          <div className="sideboard">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, laboriosam.
          </div> 
        }
        <div className="mainboard">
          { isDashboardPath && (isMobileView) ? null : isDashboardPath ? "EMPTY" : <Outlet></Outlet>}

        </div>
    </div>
  )
}

export default Dashboard