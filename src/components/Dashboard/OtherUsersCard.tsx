import { UserProfileType } from "../@types";

const OtherUsersCard = ({displayName, email, imgSrc}:UserProfileType) => {
  return (
    <div className="other-users-card">
      <div className="avatar-container small">
        <img
          src={imgSrc}
          alt={imgSrc}
        />
      </div>
      <div className="other-users-info">
        <h2> { displayName } </h2>
        <small> { email } </small>
      </div>
    </div>
  );
};

export default OtherUsersCard;
