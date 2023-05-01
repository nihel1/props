import "./App.css"; // Importing a CSS file for styling
import Profile from "./profile/profile"; // Importing a component named Profile from a file named profile.js
import image1 from "./image/imageprofile.PNG"; // Importing an image named imageprofile.PNG from a folder named image

function App() {
  // Defining a functional component named App
  const Data = {
    // Defining an object named Data with three properties
    fullName: "Ben Hmida Nihel",
    bio: "Nihel Ben hmida. I'm an accountant person from tunisia",
    profession: "accountant",
  };

  const handleName = (name) => {
    // Defining a function named handleName that displays an alert with the name of the profile user
    alert("the name of the Profile user is ${Nihel}");
  };

  return (
    <div className="App">
      <Profile data={Data} handleName={handleName}>
        <img // Rendering an image with some inline styles
          src={image1}
          alt="imgprofile"
          style={{
            // Setting some inline styles for the image
            width: "350px",
            height: "auto",
            border: "2px solid #ccc",
            boxShadow: "2px 2px 10px #888888",
          }}
        />
      </Profile>
    </div>
  );
}

export default App;
