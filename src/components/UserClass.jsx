import React from "react";
import UserContext from "../../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
    // console.log(this.props.name, "Child Constructor");
  }
  async componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("Component will unmount");
    // }, 1000);
    const userData = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await userData.json();
    // console.log(json);
    // const { name, location, avatar_url } = json;
    this.setState({
      userInfo: json,
    });
    // console.log(this.props.name, "Child componentDidMount");
    // API call
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.count !== prevState.count){
    //   // console.log(this.props.name, "Child componentDidUpdate");
    // }
    // console.log("Component DidUpdate called");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    // console.log("Component Will Unmount called");
  }

  render() {
    // const { name } = this.props;
    const { name, location } = this.state.userInfo;
    // console.log(this.props.name, "Child Render");
    // console.log("info", this.state.userInfo);
    return (
      <div className="user-card">
        <h2>User Details</h2>
        {/* <img className="avatar" src={this.state.userInfo.avatar_url}></img> */}
        <h3>Name: Test</h3>
        <h3>Email: test@gmail.com</h3>
        <h3>Location: xyz street.</h3>
        <UserContext.Consumer>
          {({ defaultUser }) => {
            return <h3>User: {defaultUser}</h3>;
          }}
        </UserContext.Consumer>

        {/* <h4>Count: {count}</h4>
        <h4>Count2: {count2}</h4> */}
        {/* <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            })
          }
        >
          Increase
        </button> */}
      </div>
    );
  }
}

export default UserClass;
