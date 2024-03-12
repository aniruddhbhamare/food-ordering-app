import React from "react";
import ReactDOM from "react-dom";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 *
 */

const App = () => (
  <div>
    <h1 id="heading">Hello World From App.js!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
