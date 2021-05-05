import React, { useState, useRef } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";
import { Turn as Hamburger } from "hamburger-react";
import { useSpring, animated, config } from "react-spring";

function Navbar() {
  //   const sidebarRef = useRef();
  const [show, setshow] = useState(false);

  const transitions = useSpring({
    // from: { transform: "translateX(-100%)" },
    // enter: { transform: "translateX(0)" },
    // leave: { transform: "translateX(-100%)" },
    // unique: true,
    config: {duration : 3000 },
    // ref: sidebarRef,
     marginright: show? 0 : -100
  });

  return (
    <div className="Navbar">
      <Hamburger onToggle={() => setshow(!show)} />
      {show ? (
        <animated.div style={transitions}>{<Sidebar />}</animated.div>
      ) : null}
      
      
    </div>
  );
}

export default Navbar;
