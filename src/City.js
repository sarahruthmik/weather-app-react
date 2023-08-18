import React from "react";

export default function City() {
  return (
    <div className="overview">
      <h1 id="city">New York</h1>
      <ul>
        <li>
          Last updated: <span id="date">5:30</span>
        </li>
        <li id="description"></li>
      </ul>
    </div>
  );
}
