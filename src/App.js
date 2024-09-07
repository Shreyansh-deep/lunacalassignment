import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App() {
  return (
    <div className="flex px-10 py-20 gap-10">
      <div className="flex-1">
        <LeftSide />
      </div>
      <div className="flex-1 ">
        <RightSide />
      </div>
    </div>
  );
}

export default App;
