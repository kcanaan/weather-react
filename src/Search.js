import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form className="currentLocation">
        <input
          type="text"
          placeholder="Enter location"
          autoComplete="off"
          autoFocus="on"
          id="location-input"
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
