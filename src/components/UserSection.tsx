import { IoMdLogOut } from "react-icons/io";
import { RiDeleteBinFill } from "react-icons/ri";
import SwitchCheck from "./SwitchCheck";


const UserSection = () => {
  
  return (
     <div className="user-section">
      <span className="avatar-container"> </span>
      <h1> Hi, Pasmac</h1>
      <small> okaforpaschal018@gmail.com </small>
      <div className="options">
        <div className="stealth-mode-switch">
          <SwitchCheck />
          <label htmlFor="stealth-mode"> stealth-mode </label>
        </div>
        <div>
          <a href="">
            <IoMdLogOut />
            <small> logout </small>
          </a>
        </div>
        <div>
          <a href="">
            <RiDeleteBinFill />
            <small> delete </small>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
