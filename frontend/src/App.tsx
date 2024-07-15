import "./App.css";
import { useHealthCheck } from "./hooks/api";

function App() {
  const apiHealthy = useHealthCheck();
  console.log("api healht: ", apiHealthy);
  return (
    <>
      <div>
        <p>Is the Api connection healthy?</p>
        <p>{apiHealthy ? "All good!" : "unable to connect"}</p>
      </div>
    </>
  );
}

export default App;
