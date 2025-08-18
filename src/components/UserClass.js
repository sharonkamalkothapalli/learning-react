import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        bio: "Dummy Bio",
      },
    };
    console.log(this.props.name + "Child Constructor");
  }
  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/sharonkamalkothapalli"
    );
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
    console.log(this.props.name + "Child Component Did Mount");
  }

  componentDidUpdate() {
    console.log(this.props.name + "Child Component Did Update");
  }

  componentWillUnmount() {
    console.log(this.props.name + "Child Component will Unmount");
  }
  render() {
    console.log(this.props.name + "Child render");

    const { name, location, avatar_url, bio } = this.state.userInfo;

    return (
      <div className="user-card">
        <img className="user-img" src={avatar_url}></img>
        <div className="user-info">
          <h2>Name:{name}</h2>
          <h3>Location: {location}</h3>
          <h3>Bio: {bio}</h3>
          <h4>Contact: @sharon07</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
