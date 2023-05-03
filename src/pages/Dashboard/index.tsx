import { useLocation } from "react-router-dom"
import UserSection from "../../components/UserSection"
import { useContext } from "react"
import { AppContext } from "../../context"

const Dashboard = () => {
  const { pathname } = useLocation()
  const isDashboardPath = /^\/dashboard$/.test(pathname)
  const isChatPath = /^\/chat$/.test(pathname)
  const isActiveChatPath = /^\/chat\/[0-9]+/.test(pathname)
  const {isMobileView} = useContext(AppContext)

  if (isMobileView) {
    if (isDashboardPath) {
      return (<UserSection/>)
    } else if (isChatPath) {
      return (<div> This is Chat Path</div>)
    } else if (isActiveChatPath) {
      return (<div> This is Active Chat Path</div>) 
    }
  } 


  return (
    <div className="dashboard">
 
          <div className="sideboard">
            {!isMobileView && <UserSection/>}
            <div className="other-users-section">
              Lorem ipsum dolor sit.
            </div>
          </div>
        <div className="mainboard">
          { (isChatPath || isDashboardPath) ? 
              <div>EMPTY</div> : 
              isActiveChatPath ? 
              <div> IS ACTIVE CHAT </div> : 
              null}
        </div>
    </div>
  )
  
}

export default Dashboard