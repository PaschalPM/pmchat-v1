import { IoMdLogOut } from "react-icons/io";
import { RiDeleteBinFill } from "react-icons/ri";
import SwitchCheck from "../SwitchCheck";
import { UserProfileType } from "../@types";

const UserSection = ({imgSrc, email, displayName}:UserProfileType) => {
  
  return (
     <div className="user-section">
      <span className="avatar-container"> 
        <img src={imgSrc} alt={imgSrc} />
      </span>
      <h1> Hi, { displayName }</h1>
      <small> { email } </small>
      <div className="options">
        <div className="stealth-mode-switch">
          <SwitchCheck />
          <label htmlFor="stealth-mode"> stealth-mode </label>
        </div>
        <div>
          <a href="" className="action">
            <IoMdLogOut />
            <small> logout </small>
          </a>
        </div>
        <div>
          <a href="" className="action">
            <RiDeleteBinFill />
            <small> delete </small>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
