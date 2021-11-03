import Canvas from "./components/Canvas";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="grid grid-cols-2 gap-1 bg-gray-500 w-full">
        <Canvas />
        <Canvas />
        <Canvas />
        <Canvas />
      </div>
    </div>
  );
}

export default App;
