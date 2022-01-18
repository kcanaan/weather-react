import Search from "./Search";
import "./Search.css";
import Location from "./Location";
import "./Location.css";
import Condition from "./Condition";
import "./Condition.css";
import Temperature from "./Temperature";
import "./Temperature.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="AppBoarder">
        <Search />
        <Location />
        <Condition />
        <Temperature />
        <small> Coded by Kiara Canaan </small>
      </div>
    </div>
  );
}

export default App;
