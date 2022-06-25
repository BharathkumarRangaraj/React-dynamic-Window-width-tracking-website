import React from "react";

export default function WindowTracker() {
  const [windowwidth, setwindowwidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchwidth() {
      setwindowwidth(window.innerWidth);
    }
    window.addEventListener("resize", watchwidth);
    return function () {
      window.removeEventListener("resize", watchwidth);
    };
  });

  return <h1>Window width: {window.innerWidth}</h1>;
}
