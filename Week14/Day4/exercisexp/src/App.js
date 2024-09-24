import React, { Component } from "react";



import BuggyCounter from "./BuggyCounter";
import ErrorBoundary from "./ErrorBoundary";


//simulation3
function App() {
  return (
    <div>
      <BuggyCounter />
    </div>
  );
}


//Simulation2
// function App() {
//   return (
//     <div>
//       <ErrorBoundary>
//         <BuggyCounter />
//       </ErrorBoundary>
//       <ErrorBoundary>
//         <BuggyCounter />
//       </ErrorBoundary>
//     </div>
//   );
// }



//Simulation 1
// function App() {
//   return (
//     <div>
//       <ErrorBoundary>
//         <BuggyCounter />
//         <BuggyCounter />
//       </ErrorBoundary>
//     </div>
//   );
// }

export default App;







// Exercise 1 part 1
// class BuggyCounter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 0 };
//   }

//   handleClick = () => {
//     this.setState(({ counter }) => ({ counter: counter + 1 }));
//   };

//   render() {
//     if (this.state.counter === 5) {
//       throw new Error("I crashed!");
//     }
//     return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
//   }
// }

// export default BuggyCounter;

