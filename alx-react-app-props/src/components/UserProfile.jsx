import UserContext from "./UserContext";

const UserProfile = () => {
  const userData = useContext (UserContext);
    return (
      <div>
        <h2>{userData.name}</h2>
        <p>Age: {UserData.age}</p>
        <p>Bio: {UserData.bio}</p>
      </div>
    );
  };

  export default UserProfile;