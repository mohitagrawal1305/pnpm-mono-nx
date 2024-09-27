import "./App.css";
import { Button } from "shared-ui";

function App() {
  return (
    <div className="App">
      Hello react
      <Button onClick={() => console.log("Clicked")}>Click here</Button>
    </div>
  );
}

export default App;
