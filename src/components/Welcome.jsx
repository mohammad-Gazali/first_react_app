import { styles } from "../style";
import Search from "./Search";

function Welcome() {
  return (
    <section className={`h-[80vh] w-full relative ${styles.flexCenter} ${styles.paddingX} flex-col bg-secondary ${styles.sepBottom} gap-4`}>
      <h1 className="text-[40px] text-white text-center">
        Welcome to our store
      </h1>
      <Search  />
    </section>
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
