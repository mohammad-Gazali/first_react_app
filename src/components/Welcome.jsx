import { user } from "../constants";

function Welcome() {
  return (
    <div className="Welcome">
      <h1>Hello, Welcome {user.name}</h1>
      <h3>
        Your age is {user.age}, and you are working as a {user.job}
      </h3>
    </div>
  );
}

// ----------------------------------------------------------------------------

// We can also write the function component as a class like this:

// import React from 'react'; // certainly we should import in the begining of the file above
//
// class Welcome extends React.Component {
//   render() {
//     return (
//       <div className="Welcome">
//         <h1>Hello, Welcome {this.props.name ? props.name : "Guest"}</h1>
//         <h3>
//           Your age is {this.props.age}, and you are working as a{" "}
//           {this.props.job}
//         </h3>
//       </div>
//     );
//   }
// }

// ----------------------------------------------------------------------------

export default Welcome;
