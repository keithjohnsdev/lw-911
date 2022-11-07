import { useState } from "react";

// Must provide props.height for animation to work smoothly
const CollapsingDiv = (props) => {
  const [collapsed, setCollapsed] = useState(props.collapsed || false);

  function toggleCollapsed() {
    setCollapsed(!collapsed);
  }
  return (
    <div className={`collapsing-div ${collapsed && "collapsed"}`}>
      <div className="header" onClick={toggleCollapsed}>
        {props.title}
        <svg
          width="22"
          height="13"
          viewBox="0 0 34 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.0205 15.7246C0.6123 16.1143 0.389643 16.6338 0.389643 17.2275C0.389643 18.4336 1.33593 19.3799 2.54199 19.3799C3.13574 19.3799 3.69238 19.1572 4.10058 18.7305L16.8291 5.68653L29.5576 18.7305C29.9658 19.1572 30.5225 19.3799 31.1162 19.3799C32.3037 19.3799 33.25 18.4336 33.25 17.2275C33.25 16.6338 33.0459 16.1143 32.6377 15.7246L18.499 1.25196C18.0352 0.769535 17.46 0.50977 16.8291 0.509769C16.1982 0.509769 15.6416 0.75098 15.1592 1.25196L1.0205 15.7246Z"
            fill="#73787B"
          />
        </svg>
      </div>
      <div className="content-wrapper">
        <div className={`content height-${props.height}`}>{props.children} </div>
      </div>
    </div>
  );
};

export default CollapsingDiv;
