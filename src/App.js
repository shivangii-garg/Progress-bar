import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import "./styles.css";

export default function App() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percent <= 90) {
        setPercent(percent + 10);
      }
    }, 1000);
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ProgressBar percent={percent} />
    </div>
  );
}
