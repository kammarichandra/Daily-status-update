
import { useState, useEffect } from "react";

function WindowResize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    console.log("Resize event listener added");

    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Resize event listener removed");
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Window Resize Example</h2>

      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>

      <p>Resize your browser to see the changes.</p>
    </div>
  );
}

export default WindowResize;
