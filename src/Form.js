import React from "react";

export default function Form() {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter any city"
          autoComplete="off"
          autoFocus
        />
        <input type="submit" value="Let's go" />
      </form>
    </div>
  );
}
