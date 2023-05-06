import { useLocation } from "react-router-dom"
import UserSection from "../../components/Dashboard/UserSection"
import { useContext, useState } from "react"
import { AppContext } from "../../context"

import OtherUsersCard from "../../components/Dashboard/OtherUsersCard"

import { UserProfileType } from "../../components/@types"

const Dashboard = () => {
  const { pathname } = useLocation()
  const isDashboardPath = /^\/dashboard$/.test(pathname)
  const isChatPath = /^\/chat$/.test(pathname)
  const isActiveChatPath = /^\/chat\/[0-9]+/.test(pathname)
  const {isMobileView} = useContext(AppContext)

  const userSectionProp: UserProfileType = {
    userId: "1",
    displayName: "Pasmac",
    email: "okaforpaschal018@gmail.com",
    imgSrc: "../src/assets/avatars/icons8-circled-user-male-skin-type-6-96.png"
  }

  const testOtherUsers: Array<UserProfileType> = [
    {
      userId: "test_id",
      displayName: "John Doe",
      email: "johndoe@gmail.com",
      imgSrc: "../../src/assets/avatars/icons8-circled-user-male-skin-type-6-96.png"
    },
    {
      userId: "test_id",
      displayName: "Richard Nick",
      email: "richnick@gmail.com",
      imgSrc: "../../src/assets/avatars/icons8-circled-user-male-skin-type-6-96.png"
    },
    {
      userId: "test_id",
      displayName: "Eze Taslim",
      email: "ezetaslim@gmail.com",
      imgSrc: "../../src/assets/avatars/icons8-circled-user-male-skin-type-6-96.png"
    },
    {
      userId: "test_id",
      displayName: "Terry Abu",
      email: "terryabu@gmail.com",
      imgSrc: "../../src/assets/avatars/icons8-circled-user-male-skin-type-6-96.png"
    },
    {
      userId: "test_id",
      displayName: "Halima Iyke",
      email: "halimaikye@gmail.com",
      imgSrc: "../../src/assets/avatars/icons8-circled-user-male-skin-type-6-96.png"
    },
    {
      userId: "test_id",
      displayName: "Anna Smith",
      email: "annasmith@gmail.com",
      imgSrc: "../../src/assets/avatars/icons8-circled-user-male-skin-type-6-96.png"
    },
    {
      userId: "test_id",
      displayName: "Marcus Mbachu",
      email: "capua@gmail.com",
      imgSrc: "../../src/assets/avatars/icons8-circled-user-male-skin-type-6-96.png"
    },
    {
      userId: "test_id",
      displayName: "Kone",
      email: "kone@gmail.com",
      imgSrc: "../../src/assets/avatars/icons8-circled-user-male-skin-type-6-96.png"
    }
  ]  

  const [otherUsers] = useState<Array<UserProfileType>>(testOtherUsers)
  if (isMobileView) {
    if (isDashboardPath) {
      return (<UserSection {...userSectionProp}/>)
    } else if (isChatPath) {
      return (<div> This is Chat Path</div>)
    } else if (isActiveChatPath) {
      return (<div> This is Active Chat Path</div>) 
    }
  } 


  return (
    <div className="dashboard">
          <div className="sideboard">
            {!isMobileView && <UserSection {...userSectionProp}/>}
            <div className="other-users-section">
              <input type="search" id="user-search" placeholder="search for a chatmate"/>
              { otherUsers.map((otherUser:UserProfileType)=>(
                  <OtherUsersCard {...otherUser}/>
              )) }
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