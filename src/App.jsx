import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App bg-red-300 overflow-x-hidden">
      <Navbar />
      <div className="flex w-full h-screen items-center justify-center">
        Content 1
      </div>
      <div className="flex w-full h-screen items-center justify-center bg-green-300">
        Content 2
      </div>
      <div className="flex w-full h-screen items-center justify-center bg-blue-300">
        Content 3
      </div>
    </div>
  );
}

export default App;
