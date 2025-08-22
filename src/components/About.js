import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Us</h1>
        {/* <User name={"Sharon (function)"} /> */}
        <UserClass name={"Sharon "} location={"Hyderabad (class)"} />
        <div>
          LoggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => <h3>{loggedInUser}</h3>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       {/* <User name={"Sharon (function)"} /> */}
//       <UserClass name={"Sharon (Class)"} location={"Hyderabad (class)"} />
//     </div>
//   );
// };

export default About;
