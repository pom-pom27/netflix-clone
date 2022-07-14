import "./app.css";
import Home from "./pages/home/Home";

interface IApp {}

const App: React.FC<IApp> = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
