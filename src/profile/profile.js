import React from "react";
import propTypes from "prop-types";
const Profile = (props) => {
  console.log(props);
  const { fullName, bio, profession } = props.data;
  return (
    <div>
      {props.children}
      <p>
        <strong>Full Name</strong> {fullName} <br />
        <strong>Bio : </strong> {bio} <br />
        <strong>profession : </strong> {profession}
      </p>
      <button onClick={() => props.handleName(props.data.fullName)}>
        Click Me{" "}
      </button>
    </div>
  );
};
Profile.defaultProps = {
  FullName: "Ben Hmida Nihel",
  Bio: "Nihel Ben hmida. I'm an accountant person from tunisia",
  Profession: "accountant",
};
Profile.propTypes = {
  FullName: propTypes.string,
  Bio: propTypes.number,
  Profession: propTypes.string,
};

export default Profile;
