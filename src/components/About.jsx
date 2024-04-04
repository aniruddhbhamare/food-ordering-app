// import User from "./User";
// import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <h2>About Us</h2>
//       <User name={"Aniruddha (functional Component)"} />
//       <UserClass name={"Aniruddha (Class Based Component)"} />
//     </div>
//   );
// };

// export default About;

import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent componentDidMount");
  }
  render() {
    // console.log("Parent render");
    return (
      <div className="p-4 m-4 w-54 border-2 ">
        <h2>About Us</h2>
        {/* <UserClass name={"Aniruddha (Class Based Component)"} /> */}
        {/* <UserClass name={"Elon Musk"} /> */}
        <UserClass />
        <User name={"Test (functional Component)"} />
        {/* <UserClass name={"Maddy"} /> */}
        <h2>Test Us</h2>
      </div>
    );
  }
}
export default About;
