import Header from "./Components/Header/header";
import Column from "./Components/LeftColumn";
import Body from "./Components/Body/body";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Column />
        <Body />
      </header>
    </div>
  );
}

export default App;
