import Header from "./Components/Header/header";
import Column from "./Components/LeftColumn";
import Body from "./Components/Body/body";
import Info from "./Components/Container/Info";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Info />
        <Column />
        <Body />
      </header>
    </div>
  );
}

export default App;
