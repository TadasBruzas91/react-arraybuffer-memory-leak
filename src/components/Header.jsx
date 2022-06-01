import React, { useState } from "react";
import { Button } from "./styles/Button.styled";
import { LoadSpiner } from "./styles/LoadSpiner.styled";
import { MobileMenu } from "./styles/MobileMenu";

let firstLoad = true;

export default function Header() {
  const [menuToggler, setMenuToggler] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggler((prevState) => !prevState);
    if (firstLoad) firstLoad = false;
  };

  const startLongTask = () => {
    setLoading(true);

    const worker = new Worker(
      new URL("../webworkers/matrix.js", import.meta.url)
    );

    worker.onmessage = ({ data }) => {
      setLoading(false);
      console.log(data);

      worker.terminate();
    };

    const matrix = new Uint8Array(1000000000);
    worker.postMessage(matrix, [matrix.buffer]);
  };

  return (
    <div>
      <Button onClick={handleMenuToggle}>Menu</Button>
      <Button onClick={startLongTask}>Start Long task</Button>
      <LoadSpiner loadIndicator={loading} />
      <MobileMenu menuOpen={menuToggler} firstLoad={firstLoad}>
        <li>Projects</li>
        <li>Contact</li>
        <li>About</li>
      </MobileMenu>
    </div>
  );
}
