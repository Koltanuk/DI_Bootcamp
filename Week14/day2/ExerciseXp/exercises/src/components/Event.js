import React, { useState } from 'react';

const Events = () => {
    // const clickMe = () => {
    //   alert('I was clicked');
    // };
  
    // const handleKeyDown = (e) => {
    //   if (e.key === 'Enter') {
    //     alert(`You pressed Enter: ${e.target.value}`);
    //   }
    // };
  
    // return (
    //   <>
    //     <button onClick={clickMe}>Click me</button>
    //     <input type="text" onKeyDown={handleKeyDown} />
    //   </>
    // );
    const [isToggleOn, setIsToggleOn] = useState(true);

  const toggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <>
      <button onClick={toggle}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </>
  );


  };



export default Events;
